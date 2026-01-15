import { useQuery } from "@tanstack/react-query";
import { Calendar, Play, Video, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistance } from "date-fns";
import { zhTW } from "date-fns/locale";
import { normalizeMediaUrl } from "@/lib/media";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface YouTubeVideo {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: any; // Used to extract YouTube link
  featuredImageUrl?: string;
  heroImage?: any;
  publishedAt?: string;
}

export default function Videos() {
  const { data: videos = [], isLoading } = useQuery<YouTubeVideo[]>({
    queryKey: ["/api/posts/by-category/menopause-videos"],
  });

  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

  // Extract YouTube URL from content or meta
  const extractYouTubeEmbed = (video: YouTubeVideo): string | null => {
    const content = video.content;
    if (!content) return null;

    let youtubeUrl = "";
    
    // If it's Lexical JSON
    if (typeof content === 'object' && content.root) {
      const findLink = (nodes: any[]): string | null => {
        for (const node of nodes) {
          if (node.type === 'link' && node.url && (node.url.includes('youtube.com') || node.url.includes('youtu.be'))) {
            return node.url;
          }
          if (node.children) {
            const result = findLink(node.children);
            if (result) return result;
          }
        }
        return null;
      };
      youtubeUrl = findLink(content.root.children) || "";
    } else if (typeof content === 'string') {
      // If it's a string, look for URL
      const match = content.match(/(https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)\/[^\s"<>]+)/);
      youtubeUrl = match ? match[0] : "";
    }

    if (!youtubeUrl) return null;

    // Convert to embed URL
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = youtubeUrl.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-2 font-bold">Video Gallery</h3>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-widest">衛教影音專區</h1>
          <div className="w-24 h-1 bg-primary mx-auto opacity-30 mt-6" />
        </div>

        {/* Video Grid */}
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
        ) : videos.length === 0 ? (
          <div className="text-center py-20 bg-secondary/10 rounded-2xl max-w-4xl mx-auto">
            <Video className="h-12 w-12 text-primary mx-auto mb-4 opacity-20" />
            <h2 className="text-2xl font-bold text-foreground/60">
              尚無影音內容
            </h2>
            <p className="text-muted-foreground mt-2">
              更多專業衛教影片製作中，敬請期待。
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {videos.map((video, idx) => {
              const embedUrl = extractYouTubeEmbed(video);
              const videoId = embedUrl ? embedUrl.split('/').pop() : null;
              const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
              
              const rawImageUrl = video.featuredImageUrl || (video.heroImage && typeof video.heroImage === 'object' ? video.heroImage.url : null) || thumbnailUrl;
              const imageUrl = normalizeMediaUrl(rawImageUrl);

              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card 
                    className="overflow-hidden flex h-full flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-primary/10 hover:border-primary/30 cursor-pointer group"
                    onClick={() => embedUrl && setSelectedVideo(video)}
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={video.title}
                          className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Video className="h-12 w-12 text-primary/20" />
                        </div>
                      )}
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="flex-1 space-y-3">
                      {video.publishedAt && (
                        <div className="flex items-center gap-2 text-xs text-primary font-medium">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {formatDistance(new Date(video.publishedAt), new Date(), { 
                              addSuffix: true,
                              locale: zhTW 
                            })}
                          </span>
                        </div>
                      )}
                      <CardTitle className="text-xl font-bold line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                        {video.title}
                      </CardTitle>
                      {video.excerpt && (
                        <CardDescription className="line-clamp-3 leading-relaxed text-muted-foreground">
                          {video.excerpt}
                        </CardDescription>
                      )}
                    </CardHeader>
                    
                    <CardContent className="pt-0 pb-6">
                      <span className="inline-flex items-center gap-2 text-primary font-semibold transition-all group-hover:gap-3">
                        立即觀看
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Video Player Dialog */}
        <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
          <DialogContent className="max-w-5xl bg-black p-0 border-none overflow-hidden aspect-video">
            {selectedVideo && (
              <iframe
                width="100%"
                height="100%"
                src={`${extractYouTubeEmbed(selectedVideo)}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
