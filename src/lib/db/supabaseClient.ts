import { PUBLIC_SUPABSE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import { createClient } from '@supabase/supabase-js'
import type { Database } from './supabase'

export const supabase = createClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABSE_ANON_KEY)