import Stream from '@cloudflare/stream-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
interface VideoPlayerProps {
  streamId: string;
}
export function VideoPlayer({ streamId }: VideoPlayerProps) {
  const streamProps = {
    controls: true,
    src: streamId,
    autoplay: true,
    muted: true,
    responsive: false, // We handle responsiveness with AspectRatio
    className: "w-full h-full",
  };
  return (
    <div className="w-full rounded-lg overflow-hidden border shadow-lg bg-black">
      <AspectRatio ratio={16 / 9}>
        <Stream {...streamProps} />
      </AspectRatio>
    </div>
  );
}