import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Session,User } from '@supabase/supabase-js';

interface UserStorage {
    user: User | null;
    setUser: (user: User | null) => void;
    session: Session | null;
    setSession: (session: Session | null) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

export const useUserStorage = create<UserStorage>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user : User | null) => set({ user }),
            session: null,
            setSession: (session: Session | null) => set({ session }),
            isLoading: false,
            setIsLoading: (isLoading: boolean) => set({ isLoading }),
        }),
        {
            name: 'fintechcrypto-user-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);