import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Calendar, ChevronLeft, Newspaper } from "lucide-react";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";
import { normalizeMediaUrl } from "@/lib/media";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: any;
  featuredImageUrl?: string;
  heroImage?: any;
  publishedAt?: string;
  articleCategory: string;
}

// Basic Lexical JSON Renderer
function LexicalRenderer({ content }: { content: any }) {
  if (!content || !content.root || !content.root.children) {
    return <p className="text-muted-foreground italic">內容格式不正確</p>;
  }

  const renderNode = (node: any, index: number) => {
    switch (node.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {node.children?.map((child: any, i: number) => renderText(child, i))}
          </p>
        );
      case "heading":
        const HeadingTag = node.tag || "h2";
        return (
          <HeadingTag key={index} className="font-bold mt-8 mb-4 text-foreground">
            {node.children?.map((child: any, i: number) => renderText(child, i))}
          </HeadingTag>
        );
      case "list":
        const ListTag = node.listType === "number" ? "ol" : "ul";
        return (
          <ListTag key={index} className={`mb-6 ml-6 ${node.listType === "number" ? "list-decimal" : "list-disc"}`}>
            {node.children?.map((item: any, i: number) => (
              <li key={i} className="mb-2">
                {item.children?.map((child: any, j: number) => renderNode(child, j))}
              </li>
            ))}
          </ListTag>
        );
      case "listitem":
        return (
          <span key={index}>
            {node.children?.map((child: any, i: number) => renderNode(child, i))}
          </span>
        );
      case "block":
        // Handle Media Blocks
        if (node.fields?.blockType === "mediaBlock" || node.fields?.media) {
          const mediaUrl = normalizeMediaUrl(node.fields?.mediaUrl || node.fields?.media);
          if (mediaUrl) {
            return (
              <div key={index} className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img src={mediaUrl} alt="Article visual" className="w-full h-auto" />
                {node.fields?.caption && (
                  <p className="text-center text-sm text-muted-foreground mt-2">{node.fields.caption}</p>
                )}
              </div>
            );
          }
        }
        return null;
      default:
        // Generic text or unknown
        if (node.text) return renderText(node, index);
        return null;
    }
  };

  const renderText = (node: any, index: number) => {
    let element = <span key={index}>{node.text}</span>;
    
    // Lexical format flags: 1=Bold, 2=Italic, 8=Underline, etc.
    if (node.format & 1) element = <strong key={index}>{element}</strong>;
    if (node.format & 2) element = <em key={index}>{element}</em>;
    
    if (node.type === "link") {
      return (
        <a key={index} href={node.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
          {node.children?.map((child: any, i: number) => renderText(child, i))}
        </a>
      );
    }
    
    return element;
  };

  return (
    <div className="lexical-content">
      {content.root.children.map((node: any, i: number) => renderNode(node, i))}
    </div>
  );
}

export default function NewsDetail() {
  const [, params] = useRoute("/news/:slug");
  const slug = params?.slug;

  const { data: post, isLoading } = useQuery<Post>({
    queryKey: [`/api/posts/slug/${slug}`],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <Newspaper className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-20" />
        <h1 className="text-2xl font-bold text-foreground">找不到此新聞文章</h1>
        <Link href="/news">
          <Button variant="link" className="mt-4">返回新聞列表</Button>
        </Link>
      </div>
    );
  }

  // Robust image URL extraction
  const getImageUrl = () => {
    if (post.featuredImageUrl) return normalizeMediaUrl(post.featuredImageUrl);
    if (post.heroImage) {
      if (typeof post.heroImage === 'string') return normalizeMediaUrl(post.heroImage);
      if (typeof post.heroImage === 'object') return normalizeMediaUrl(post.heroImage.url || post.heroImage.filename);
    }
    return null;
  };

  const imageUrl = getImageUrl();

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/news">
          <Button 
            variant="ghost" 
            className="mb-8 hover:text-primary transition-colors"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> 返回新聞列表
          </Button>
        </Link>

        <article className="space-y-8">
          {/* News Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                {post.articleCategory === 'menopause-articles' ? '醫學動態' : post.articleCategory}
              </span>
              {post.publishedAt && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Calendar className="h-4 w-4" />
                  <span>{format(new Date(post.publishedAt), "yyyy年MM月dd日", { locale: zhTW })}</span>
                </div>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Featured Image */}
          {imageUrl && (
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-border">
              <img 
                src={imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-primary prose-img:rounded-xl mt-12">
            {typeof post.content === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <LexicalRenderer content={post.content} />
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
