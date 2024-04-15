import { supabase } from '$lib/db/supabaseClient';
import { locations, dojos } from "$lib/utils/dojos"
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
    dojo: z.string().min(1),
    parentFirstName: z.string().min(3),
    parentLastName: z.string().min(3),
    contactNumber: z.string().min(10),
    childFirstName: z.string().min(3),
    childLastName: z.string().min(2),
    email: z.string().email(),
    utmSource: z.string(),
    utmMedium: z.string(),
    utmCampaign: z.string(),
});

export const load = async ({ cookies }) => {
    const form = await superValidate(zod(schema));

    return { form }
};