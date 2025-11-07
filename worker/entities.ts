/**
 * Minimal real-world demo: One Durable Object instance per entity (User, ChatBoard), with Indexes for listing.
 */
import { IndexedEntity } from "./core-utils";
import type { User, Chat, ChatMessage, Video } from "@shared/types";
import { MOCK_CHAT_MESSAGES, MOCK_CHATS, MOCK_USERS } from "@shared/mock-data";
// USER ENTITY: one DO instance per user
export class UserEntity extends IndexedEntity<User> {
  static readonly entityName = "user";
  static readonly indexName = "users";
  static readonly initialState: User = { id: "", name: "" };
  static seedData = MOCK_USERS;
}
// CHAT BOARD ENTITY: one DO instance per chat board, stores its own messages
export type ChatBoardState = Chat & { messages: ChatMessage[] };
const SEED_CHAT_BOARDS: ChatBoardState[] = MOCK_CHATS.map(c => ({
  ...c,
  messages: MOCK_CHAT_MESSAGES.filter(m => m.chatId === c.id),
}));
export class ChatBoardEntity extends IndexedEntity<ChatBoardState> {
  static readonly entityName = "chat";
  static readonly indexName = "chats";
  static readonly initialState: ChatBoardState = { id: "", title: "", messages: [] };
  static seedData = SEED_CHAT_BOARDS;
  async listMessages(): Promise<ChatMessage[]> {
    const { messages } = await this.getState();
    return messages;
  }
  async sendMessage(userId: string, text: string): Promise<ChatMessage> {
    const msg: ChatMessage = { id: crypto.randomUUID(), chatId: this.id, userId, text, ts: Date.now() };
    await this.mutate(s => ({ ...s, messages: [...s.messages, msg] }));
    return msg;
  }
}
// VIDEO ENTITY: one DO instance per video
const mockVideos: Video[] = [
  {
    id: 'vid001',
    title: 'Cybernetic Horizons',
    description: 'A journey through a futuristic city, exploring the blend of technology and humanity.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    streamUid: '2d9a32253e8c481fbec226a791d7c3a6',
  },
  {
    id: 'vid002',
    title: 'Ocean\'s Whisper',
    description: 'Dive deep into the serene and mysterious world beneath the waves.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb685?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    streamUid: 'ada70754f3664e01a35a1be82b00d473',
  },
  {
    id: 'vid003',
    title: 'Forest of Giants',
    description: 'Walk amongst ancient trees and discover the secrets of a timeless forest.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    streamUid: 'f305090a386a4e32a153525547fd9a15',
  },
  {
    id: 'vid004',
    title: 'Desert Solitude',
    description: 'Experience the stark beauty and profound silence of the desert landscape.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    streamUid: '8a8310f8ee85489181ede6e45a8c43f3',
  },
  {
    id: 'vid005',
    title: 'Mountain Majesty',
    description: 'Ascend to breathtaking peaks and witness the world from above.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    streamUid: '2d9a32253e8c481fbec226a791d7c3a6',
  },
  {
    id: 'vid006',
    title: 'Urban Canvas',
    description: 'A vibrant look at the art, culture, and energy of city life.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    streamUid: 'ada70754f3664e01a35a1be82b00d473',
  },
  {
    id: 'vid007',
    title: 'Galactic Dreams',
    description: 'A visual odyssey through nebulae, stars, and distant galaxies.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    streamUid: 'f305090a386a4e32a153525547fd9a15',
  },
  {
    id: 'vid008',
    title: 'Coastal Serenity',
    description: 'Relax to the soothing sounds and sights of waves meeting the shore.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723a996f6ea?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    streamUid: '8a8310f8ee85489181ede6e45a8c43f3',
  },
];
export class VideoEntity extends IndexedEntity<Video> {
  static readonly entityName = "video";
  static readonly indexName = "videos";
  static readonly initialState: Video = { id: "", title: "", description: "", thumbnailUrl: "", streamUid: "" };
  static seedData = mockVideos;
}