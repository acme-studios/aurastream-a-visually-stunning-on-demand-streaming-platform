import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockVideos } from '@/lib/mock-data';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
export function PlayerPage() {
  const { videoId } = useParams<{ videoId: string }>();
  const video = mockVideos.find(v => v.id === videoId);
  if (!video) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-4">Video not found</h1>
        <p className="text-muted-foreground mb-8">The requested video does not exist.</p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Link>
        </Button>
      </div>
    );
  }
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
          <div className="max-w-4xl mx-auto">
            <VideoPlayer streamId={video.streamUid} />
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">{video.title}</h1>
              <p className="text-lg text-muted-foreground">{video.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}