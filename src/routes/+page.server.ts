import { supabase } from '$lib/db/supabaseClient';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';


const schema = z.object({
    dojo: z.string().default('Select A Location'),
    parentFirstName: z.string().min(3),
    parentLastName: z.string().min(3),
    contactNumber: z.string().min(10),
    childFirstName: z.string().min(3),
    childLastName: z.string().min(3),
    email: z.string().email()
    });

export const load = async () => {
    const form = await superValidate(zod(schema));

    return { form }
};

export const actions = {
    default: async ({ fetch, request }) => {
      const form = await superValidate(request, zod(schema));
  
      if (!form.valid) {
        return fail(400, { form });
      }
    
    const { data, error } = await supabase
    .from('leads')
    .insert([
    { 
        dojo: `${form.data.dojo}`, 
        parentFirstName: `${form.data.parentFirstName}`,
        parentLastName: `${form.data.parentLastName}`, 
        contactNumber: `${form.data.contactNumber}`,
        email: `${form.data.email}`, 
        childFirstName: `${form.data.childFirstName}`,
        childLastName: `${form.data.childLastName}`, 
    },
    ])
    .select()

    if(error) {
        return message(form, "You have already made an inquiry, please wait for us to contact you.")
    }
    return message(form, "We have received your inquiry. We will contact you shortly.")

    const lineLeaderHeaders: Headers = new Headers();
    lineLeaderHeaders.append("Content-Type", "application/json");

    const raw: string = JSON.stringify({
      "primary_guardian": {
        "first_name": `${form.data.parentFirstName}`,
        "last_name": `${form.data.parentLastName}`, 
        "primary_phone": {
          "type": 19,
          "number": `${form.data.contactNumber}`,
        },
       "email": `${form.data.email}`, 
      },
      "children": {
        "first_name": `${form.data.childFirstName}`,
        "last_name": `${form.data.childLastName}`, 
      }
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: lineLeaderHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch("{{url}}/api/v3/families?allow_duplicates=false",requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


      return { form };
    }
};