const SUPABASE_URL = "https://bmuoiexhmpgvyqxzxtyi.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_7Lkei-gMeH4DcZ947oOqlQ_yy4eigBy";   // utilisez la clé publique du projet Supabase

if (window.supabase && typeof window.supabase.createClient === 'function') {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.supabaseScriptLoaded = true;
  console.log("✅ Supabase connecté !");
} else {
  window.supabaseClient = null;
  window.supabaseScriptLoaded = false;
  console.warn('Supabase script chargé, mais la bibliothèque Supabase n\'est pas disponible.');
}