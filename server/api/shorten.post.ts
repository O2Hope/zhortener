import { nanoid } from "nanoid";
import { createClient } from '@supabase/supabase-js'

interface Link {
    id?: string;
    long_link: string;
    link_id: string;
    created_at?: string;
    user_id?: string;
}

export default defineEventHandler(async (event) => {

    // Read the link from the request body
    const { link } = await readBody(event);

    const { supabaseAnonKey, supabaseUrl, baseURL } = useRuntimeConfig();
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    
    // Generate a random 10 character ID 
    const linkId = nanoid(10);

    const { data, error } = await supabase.from('links').insert({
        long_link: link,
        link_id: linkId,
        user_id: null
    }).select().single();

    if (error) throw createError({statusCode: 500, statusMessage: error.message});

    return {
        ...data,
        link: `${baseURL}/${data.link_id}`
    }

});
