import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";


const supabaseUrl = "https://heskmiiotdhqiyptfbtk.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhlc2ttaWlvdGRocWl5cHRmYnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMjE1MTksImV4cCI6MjAzODc5NzUxOX0.aDhqxMvcJgb4aaQyC9yNllaGc2f9dfnutVCiztAdDRc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey,{
    auth:{
        storage:AsyncStorage,
        autoRefreshToken:true ,
        persistSession:true,    
        detectSessionInUrl  :false,
 }
}); 