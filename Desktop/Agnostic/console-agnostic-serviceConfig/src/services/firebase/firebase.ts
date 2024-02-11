import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMNAIN as string,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
};
// Inicialize o app do Firebase
export const app = initializeApp(firebaseConfig);

// Obtenha a instância do serviço de autenticação
export const auth = getAuth(app);