import { supabase } from '$lib/db/supabaseClient';
import { locations } from '$lib/utils/dojos.js';
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
});

export const actions = {
    default: async ({ request, cookies }) => {
        const form = await superValidate(request, zod(schema));

        if (!form.valid) {
            return fail(400, { form });
        }

        const { data, error } = await supabase
            .from('utm_data')
            .insert([
                {
                    source: `${cookies.get("utm_source") || ""}`,
                    medium: `${cookies.get("utm_medium") || ""}`,
                    campaign: `${cookies.get("utm_campaign") || ""}`,
                    parentFirstName: `${form.data.parentFirstName}`,
                    parentLastName: `${form.data.parentLastName}`,
                    phoneNumber: `${form.data.contactNumber}`,
                    email: `${form.data.email}`,
                    childFirstName: `${form.data.childFirstName}`,
                    childLastName: `${form.data.childLastName}`,
                    dojo: `${form.data.dojo}`
                },
            ])
            .select()
        
        if (error) {
            console.log(error);
        }

        interface Lead {
            facilitySlug: string,
            ParentFirstName: string,
            ParentLastname: string,
            ChildFirstName: string,
            ChildLastName: string,
            Email: string,
            PhoneNumber: string
        }

        let center = "";

        for (let i = 0; i < locations.length; i++) {
            if (form.data.dojo == locations[i].name) {
                center = locations[i].crm;
                break;
            }
        }

        const lead: Lead = {
            facilitySlug: center,
            ParentFirstName: form.data.parentFirstName,
            ParentLastname: form.data.parentLastName,
            ChildFirstName: form.data.childFirstName,
            ChildLastName: form.data.childLastName,
            Email: form.data.email,
            PhoneNumber: form.data.contactNumber,
        }

        const leadReq = await fetch("https://services.codeninjas.com/api/v1/leads", {
            headers: {
                "content-type": "application/json; charset=UTF-8",
            },
            method: 'POST',
            body: JSON.stringify(lead),
        })

        console.log(leadReq)

        if(leadReq.status > 400) {
            return message(form, "An error occured while processing your request, please contact 6046008339 to report this issue.");
        }

        cookies.set('inquiry', "success", { path: "/" });
        throw redirect(302, "/success");
    }
};