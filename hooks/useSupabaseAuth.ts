import { supabase } from "@/lib/supabase";
import { useUserStorage } from "@/store/useUserStorage";

export  default function useSupabaseAuth() {
    const { session, setSession,    setUser } = useUserStorage();
    async function signInWithEmail(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        return {
            data,
            error,
        }
    }

    async function signUpWithEmail(email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        return {
            data,
            error,
        }
    }
    async function signOut() {
        const { error } = await supabase.auth.signOut();
        if(!error){
            setSession(null);
            setUser(null);
        }
        return {
            error,
        }
      
    }

    async function getUserProfile() {
       if(!session?.user) throw new Error("No  User on the session found");
       const { data, error,status } = await supabase.
       from("profiles")
       .select(`username,full_name,avatar_url,website`)
       .eq("id", session?.user.id)
       .single();
       return {
           data,
           error,
           status
       }
    }

    async function  updateUserProfile   (
        username: string,
        fullName: string,
        avatarUrl: string,
        website: string
    ) {
        if(!session?.user) throw new Error("No  User on the session found");
        const updates = {
            id: session?.user.id,
            username,
            full_name:fullName,
            avatar_url:avatarUrl,
            website,
            updated_at: new Date().toISOString(),
        }

        const {error} = await supabase.from("profiles").upsert(updates);
        return {
            error,
        }
    }

    return {
        signInWithEmail,
        signUpWithEmail,
        signOut,
        getUserProfile,
        updateUserProfile,
    }
}
