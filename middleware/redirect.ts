import { createClient } from "@supabase/supabase-js";

export default defineNuxtRouteMiddleware(async (to, from) => {

    if (!to.params.linkId) return;

    const { supabaseAnonKey, supabaseUrl } = useRuntimeConfig();
    const supabase = createClient(supabaseUrl, supabaseAnonKey)


    const { data, error } = await supabase.from('links').select().eq('link_id', to.params.linkId).single()


    if (error) throw createError({ statusCode: 404, statusMessage: "Link not found"});

    return navigateTo(data.long_link, {external: true});

});