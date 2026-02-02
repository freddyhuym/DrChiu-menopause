import { motion } from "framer-motion";
import { Newspaper, ArrowRight, Globe, TrendingUp, AlertCircle, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { normalizeMediaUrl } from "@/lib/media";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";

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

export default function News() {
  // 從 API 獲取資料
  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts/by-category/menopause-articles"],
  });

  const categories = [
    {
      title: "全球研究摘要",
      desc: "同步翻譯並解讀 NEJM、Lancet 等國際期刊的最新研究。",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "產業新聞",
      desc: "新藥上市資訊、新型醫療儀器發展、健保政策更新。",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "聲明與澄清",
      desc: "針對社群媒體流傳的錯誤健康資訊，以專業角度發布正式澄清稿。",
      icon: <AlertCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 whitespace-nowrap">Meta News 醫學動態</h1>
        <p className="text-xl text-muted-foreground">Press Center</p>
      </div>

      {/* 分類卡片 */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-primary/5 p-6 rounded-lg border border-primary/10">
            <div className="flex items-center gap-3 mb-4 text-primary">
              {cat.icon}
              <h3 className="font-bold text-lg">{cat.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{cat.desc}</p>
          </div>
        ))}
      </div>

      {/* 新聞列表區塊 */}
      <div className="space-y-8">
        {isLoading ? (
          <div className="text-center py-10 text-muted-foreground">正在從資料庫載入最新消息...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
            <Newspaper className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="text-lg font-medium">目前資料庫中尚無醫學動態文章</p>
            <p className="text-sm opacity-60 mt-2">請至後台新增分類為「metalife文章」的內容</p>
          </div>
        ) : (
          posts.map((post) => {
            const rawImageUrl = post.featuredImageUrl || (post.heroImage && typeof post.heroImage === 'object' ? post.heroImage.url : null);
            const imageUrl = normalizeMediaUrl(rawImageUrl);
            const formattedDate = post.publishedAt 
              ? format(new Date(post.publishedAt), "yyyy.MM.dd") 
              : "資料確認中";

            return (
              <div key={post.id} className="flex flex-col md:flex-row gap-8 items-start border-b border-border pb-8 group">
                {imageUrl ? (
                  <div className="w-full md:w-64 aspect-video overflow-hidden rounded-lg shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                    <img src={imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                ) : (
                  <div className="w-full md:w-64 aspect-video bg-muted rounded-lg shrink-0 flex items-center justify-center">
                    <Newspaper className="w-10 h-10 text-muted-foreground/20" />
                  </div>
                )}
                <div className="flex-1 space-y-3">
                  <div className="text-sm text-primary font-bold">
                    {formattedDate} | {post.articleCategory === 'menopause-articles' ? '醫學動態' : post.articleCategory}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                    {post.excerpt || "點擊閱讀全文以獲取完整的醫療資訊與研究摘要。"}
                  </p>
                  <Link href={`/news/${post.slug}`}>
                    <button className="text-primary font-bold text-sm flex items-center mt-2 group-hover:translate-x-1 transition-transform cursor-pointer">
                      閱讀全文 <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
