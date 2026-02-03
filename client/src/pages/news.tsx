import { motion } from "framer-motion";
import { Newspaper, ArrowRight, Globe, TrendingUp, AlertCircle, Calendar, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { normalizeMediaUrl } from "@/lib/media";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImageUrl?: string;
  heroImage?: any;
  publishedAt?: string;
  articleCategory: string;
}

const POSTS_PER_PAGE = 6;

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts/by-category/menopause-articles"],
  });

  // 搜尋過濾
  const filteredPosts = useMemo(() => {
    if (!searchTerm) return posts;
    const term = searchTerm.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt?.toLowerCase().includes(term)
    );
  }, [posts, searchTerm]);

  // 分頁邏輯
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className="py-20 container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 whitespace-nowrap tracking-widest">Meta News 醫學動態</h1>
        <p className="text-xl text-muted-foreground font-light">Press Center</p>
      </div>

      {/* 搜尋與統計 */}
      <div className="max-w-5xl mx-auto mb-12 flex flex-col md:flex-row gap-6 items-center justify-between bg-secondary/10 p-6 rounded-2xl border border-primary/10">
        <div className="flex items-center gap-4">
          <Badge className="bg-primary text-white px-4 py-1.5 text-sm rounded-lg">
            全部文章：{filteredPosts.length} 筆
          </Badge>
          {searchTerm && (
            <span className="text-sm text-muted-foreground">
              搜尋「{searchTerm}」的結果
            </span>
          )}
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜尋新聞關鍵字..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 bg-white border-primary/20"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        {isLoading ? (
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-64 aspect-video bg-muted rounded-lg" />
                <div className="flex-1 space-y-4 py-2">
                  <div className="h-4 bg-muted w-1/4 rounded" />
                  <div className="h-8 bg-muted w-3/4 rounded" />
                  <div className="h-16 bg-muted w-full rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-primary/10">
            <Newspaper className="w-16 h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-2xl font-bold text-foreground/40">目前尚無相關文章</h3>
            <Button variant="link" onClick={() => handleSearch("")} className="mt-4">顯示所有新聞</Button>
          </div>
        ) : (
          <>
            <div className="space-y-12">
              {paginatedPosts.map((post, idx) => {
                const imageUrl = normalizeMediaUrl(post.featuredImageUrl);
                const formattedDate = post.publishedAt 
                  ? format(new Date(post.publishedAt), "yyyy.MM.dd") 
                  : "資料確認中";

                return (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (idx % POSTS_PER_PAGE) * 0.1 }}
                    className="flex flex-col md:flex-row gap-8 items-start border-b border-border pb-12 group"
                  >
                    <Link href={`/news/${post.slug}`} className="w-full md:w-64 shrink-0">
                      <div className="aspect-video overflow-hidden rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-500 cursor-pointer">
                        {imageUrl ? (
                          <img src={imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <Newspaper className="w-10 h-10 text-muted-foreground/20" />
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded uppercase tracking-wider">
                          {post.articleCategory === 'menopause-articles' ? '醫學動態' : post.articleCategory}
                        </span>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
                          <Calendar className="h-3.5 w-3.5" />
                          {formattedDate}
                        </div>
                      </div>
                      <Link href={`/news/${post.slug}`}>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer leading-tight">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground line-clamp-2 leading-loose text-lg">
                        {post.excerpt || "點擊進入閱讀全文以獲取更詳細的專業醫學研究摘要與健康建議。"}
                      </p>
                      <Link href={`/news/${post.slug}`}>
                        <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-primary font-bold group-hover:gap-3 transition-all">
                          閱讀全文 <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* 分頁控制 */}
            {totalPages > 1 && (
              <div className="pt-12 flex justify-center items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="rounded-full"
                >
                  上一頁
                </Button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-full ${currentPage === page ? 'bg-primary' : ''}`}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="rounded-full"
                >
                  下一頁
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
