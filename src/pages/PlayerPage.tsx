import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/lib/api-client';
import type { Video } from '@shared/types';
export function PlayerPage() {
  const { videoId } = useParams<{ videoId: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!videoId) {
      setError("No video ID provided.");
      setLoading(false);
      return;
    }
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const data = await api<Video>(`/api/videos/${videoId}`);
        setVideo(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch video.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchVideo();
  }, [videoId]);
  const renderContent = () => {
    if (loading) {
      return (
        <div className="max-w-4xl mx-auto">
          <Skeleton className="w-full aspect-video" />
          <div className="mt-8">
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-5/6" />
          </div>
        </div>
      );
    }
    if (error || !video) {
      return (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Video not found</h1>
          <p className="text-muted-foreground mb-8">{error || 'The requested video does not exist.'}</p>
        </div>
      );
    }
    return (
      <div className="max-w-4xl mx-auto">
        <VideoPlayer streamId={video.streamUid} />
        <div className="mt-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">{video.title}</h1>
          <p className="text-lg text-muted-foreground">{video.description}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-background text-foreground min-h-screen">
      <ThemeToggle className="fixed top-4 right-4" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <div className="mb-6">
            <Button asChild variant="outline">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Gallery
              </Link>
            </Button>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}