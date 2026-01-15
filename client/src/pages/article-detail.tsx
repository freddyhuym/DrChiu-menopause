import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Calendar, ChevronLeft, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";
import { normalizeMediaUrl } from "@/lib/media";
import { Button } from "@/components/ui/button";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: any;
  featuredImageUrl?: string;
  heroImage?: any;
  publishedAt?: string;
}

export default function ArticleDetail() {
  const [, params] = useRoute("/articles/:slug");
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
        <h1 className="text-2xl font-bold text-foreground">找不到文章</h1>
        <Button variant="link" onClick={() => window.history.back()}>返回列表</Button>
      </div>
    );
  }

  const rawImageUrl = post.featuredImageUrl || (post.heroImage && typeof post.heroImage === 'object' ? post.heroImage.url : null);
  const imageUrl = normalizeMediaUrl(rawImageUrl);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-8 hover:text-primary transition-colors"
          onClick={() => window.history.back()}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> 返回文章列表
        </Button>

        <article className="space-y-8">
          {/* Article Header */}
          <div className="space-y-4">
            {post.publishedAt && (
              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                <Calendar className="h-4 w-4" />
                <span>{format(new Date(post.publishedAt), "yyyy年MM月dd日", { locale: zhTW })}</span>
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Hero Image */}
          {imageUrl && (
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-primary prose-img:rounded-xl">
            {/* 這裡簡單處理內容顯示，實際可能需要 Lexical 渲染器 */}
            {typeof post.content === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p className="text-muted-foreground italic">內容加載中或格式不支援...</p>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
