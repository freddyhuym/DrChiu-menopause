import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistance } from "date-fns";
import { zhTW } from "date-fns/locale";
import { normalizeMediaUrl } from "@/lib/media";
import { motion } from "framer-motion";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImageUrl?: string;
  heroImage?: any; // For flexibility with MongoDB structure
  publishedAt?: string;
  articleCategory: string;
}

export default function Articles() {
  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts/by-category/menopause-articles"],
  });

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-2 font-bold">Menopause Articles</h3>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-widest">更年期專欄文章</h1>
          <div className="w-24 h-1 bg-primary mx-auto opacity-30 mt-6" />
        </div>

        {/* Article Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="aspect-video bg-muted" />
                <CardHeader>
                  <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted rounded w-full" />
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 bg-secondary/10 rounded-2xl max-w-4xl mx-auto">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4 opacity-20" />
            <h2 className="text-2xl font-bold text-foreground/60">
              尚無專欄文章
            </h2>
            <p className="text-muted-foreground mt-2">
              我們正在為您準備精彩的內容，敬請期待。
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post, idx) => {
              // Extract image URL from either featuredImageUrl or heroImage.url
              const rawImageUrl = post.featuredImageUrl || (post.heroImage && typeof post.heroImage === 'object' ? post.heroImage.url : null);
              const imageUrl = normalizeMediaUrl(rawImageUrl);
              
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link href={`/articles/${post.slug}`} className="group block h-full">
                    <Card className="overflow-hidden flex h-full flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-primary/10 hover:border-primary/30">
                      {imageUrl ? (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-secondary/30 flex items-center justify-center">
                          <Sparkles className="h-12 w-12 text-primary/20" />
                        </div>
                      )}
                      
                      <CardHeader className="flex-1 space-y-3">
                        {post.publishedAt && (
                          <div className="flex items-center gap-2 text-xs text-primary font-medium">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>
                              {formatDistance(new Date(post.publishedAt), new Date(), { 
                                addSuffix: true,
                                locale: zhTW 
                              })}
                            </span>
                          </div>
                        )}
                        <CardTitle className="text-xl font-bold line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        {post.excerpt && (
                          <CardDescription className="line-clamp-3 leading-relaxed text-muted-foreground">
                            {post.excerpt}
                          </CardDescription>
                        )}
                      </CardHeader>
                      
                      <CardContent className="pt-0 pb-6">
                        <span className="inline-flex items-center gap-2 text-primary font-semibold transition-all group-hover:gap-3">
                          閱讀全文
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
