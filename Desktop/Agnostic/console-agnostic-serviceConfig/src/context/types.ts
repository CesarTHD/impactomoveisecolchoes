import { User } from "../types/User";

export type AgnoContextType = {
  user: User | null;
  token?: string; // Torna a propriedade token opcional
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  signInWithGoogle: () => Promise<void>;
  signInWithGitHub: () => Promise<void>; 
  signUp: (email: string, password: string) => Promise<void>;
};
