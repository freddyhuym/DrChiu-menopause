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

  const rawImageUrl = post.featuredImageUrl || (post.heroImage && typeof post.heroImage === 'object' ? post.heroImage.url : null);
  const imageUrl = normalizeMediaUrl(rawImageUrl);

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
              <div className="text-muted-foreground italic bg-muted/30 p-8 rounded-xl border border-dashed border-border">
                <p>內容加載中或格式不支援（Lexical JSON 渲染待實作）...</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
