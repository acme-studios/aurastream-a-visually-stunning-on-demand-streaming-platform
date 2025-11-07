import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayCircle, Clapperboard } from 'lucide-react';
import { mockVideos } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AspectRatio } from '@/components/ui/aspect-ratio';
export function HomePage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };
  return (
    <div className="bg-background text-foreground min-h-screen">
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-16 md:py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 -z-10" />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-3 mb-6"
          >
            <Clapperboard className="w-12 h-12 text-indigo-500" />
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter font-display bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground">
              AuraStream
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A minimalist and elegant on-demand video streaming experience, built on Cloudflare.
          </motion.p>
        </header>
        <main className="pb-16 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {mockVideos.map((video, i) => (
              <motion.div
                key={video.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <Link to={`/watch/${video.id}`} className="block group">
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 hover:border-indigo-500/50 animate-border-glow">
                    <div className="relative">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                      </div>
                    </div>
                    <CardContent className="p-4 flex-grow">
                      <h3 className="text-lg font-semibold leading-tight text-foreground group-hover:text-indigo-400 transition-colors duration-200">{video.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{video.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
        <footer className="text-center py-8 border-t">
            <p className="text-muted-foreground">Built with ❤️ at Cloudflare</p>
        </footer>
      </div>
    </div>
  );
}