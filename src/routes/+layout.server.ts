import { superValidate } from 'sveltekit-superforms';
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

export const load = async ({ url, cookies }) => {
    let utmSource = url.searchParams.get("utm_source")
    let utmMedium = url.searchParams.get("utm_medium")
    let utmCampaign = url.searchParams.get("utm_campaign")

    if(utmSource) {
        cookies.set("utm_source", utmSource, {
            path: "/"
        })
    }
    if(utmMedium) {
        cookies.set("utm_medium", utmMedium, {
            path: "/"
        })
    }
    if(utmCampaign) {
        cookies.set("utm_campaign", utmCampaign, {
            path: "/"
        })
    }
    
    const form = await superValidate(zod(schema));
    return { form }
};