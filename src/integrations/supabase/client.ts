// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rrovjgugxpnymvatasgy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyb3ZqZ3VneHBueW12YXRhc2d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2OTY2MzQsImV4cCI6MjA2NTI3MjYzNH0.r5bbnjUTBoSNqtnzXqNSSNfPqzWtGbAzOUMVsKKh06o";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);