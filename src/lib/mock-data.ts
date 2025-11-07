export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  streamUid: string;
}
// NOTE: These are placeholder UIDs. Replace with your actual Cloudflare Stream video UIDs.
export const mockVideos: Video[] = [
  {
    id: 'future-of-ai',
    title: 'The Future of Artificial Intelligence',
    description: 'A deep dive into the trends and technologies shaping the future of AI, from large language models to autonomous systems. Explore the ethical implications and potential societal impact.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
    streamUid: 'a49359a1b58248358212b078812a104c',
  },
  {
    id: 'quantum-computing-explained',
    title: 'Quantum Computing Explained',
    description: 'Unravel the mysteries of quantum computing. This video breaks down complex concepts like superposition and entanglement into understandable terms, showcasing its potential to revolutionize science.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop',
    streamUid: 'a49359a1b58248358212b078812a104c',
  },
  {
    id: 'exploring-deep-space',
    title: 'Exploring Deep Space',
    description: 'Embark on a visual journey to the furthest reaches of our universe. Witness stunning nebulae, distant galaxies, and the raw beauty of cosmos captured by the latest telescopes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    streamUid: 'a49359a1b58248358212b078812a104c',
  },
  {
    id: 'secrets-of-the-ocean',
    title: 'Secrets of the Deep Ocean',
    description: 'Dive into the abyss and discover the enigmatic life forms that thrive in the dark depths of our oceans. A mesmerizing look at the biodiversity hidden beneath the waves.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544443368-c4d6fb7de2b9?q=80&w=2070&auto=format&fit=crop',
    streamUid: 'a49359a1b58248358212b078812a104c',
  },
  {
    id: 'architectural-marvels',
    title: 'Modern Architectural Marvels',
    description: 'A tour of the world\'s most innovative and breathtaking architectural designs. From sustainable skyscrapers to futuristic bridges, see how architects are pushing the boundaries of engineering.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop',
    streamUid: 'a49359a1b58248358212b078812a104c',
  },
  {
    id: 'the-art-of-minimalism',
    title: 'The Art of Minimalism',
    description: 'Discover how the philosophy of "less is more" can transform your life. This documentary explores minimalism in design, lifestyle, and mindset for a more meaningful existence.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop',
    streamUid: 'a49359a1b58248358212b078812a104c',
  },
  {
    id: 'cybersecurity-frontlines',
    title: 'Cybersecurity in the Digital Age',
    description: 'An essential guide to understanding the threats that lurk in the digital world and how to protect yourself. Hear from experts on the frontlines of cyber warfare.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544890225-2f3faec4bae6?q=80&w=2070&auto=format&fit=crop',
    streamUid: 'a49359a1b58248358212b078812a104c',
  },
  {
    id: 'journey-through-the-amazon',
    title: 'Journey Through the Amazon',
    description: 'Experience the vibrant ecosystem of the Amazon rainforest. This film captures the stunning diversity of its flora and fauna, and the urgent need for its conservation.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1532323544230-719166d62d39?q=80&w=2070&auto=format&fit=crop',
    streamUid: 'a49359a1b58248358212b078812a104c',
  },
];