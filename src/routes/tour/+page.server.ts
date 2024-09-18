import { tourSchema } from '$lib/components/forms/validation';
import { supabase } from '$lib/db/supabaseClient';
import { redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
    const form = await superValidate(zod(tourSchema));

    return { form };
};

export const actions = {
    default: async ({ request, fetch, cookies }) => {
        const form = await superValidate(request, zod(tourSchema));
        
        if (!form.valid) {
            return fail(400, { form });
        }

        if(form.data.childBirthMonth.charAt(0) == '0') {
            form.data.childBirthMonth = form.data.childBirthMonth.charAt(1);
        }
        if(form.data.childBirthDay.charAt(0) == '0') {
            form.data.childBirthDay = form.data.childBirthDay.charAt(1);
        }

        const { data, error } = await supabase
            .from('leads')
            .insert([
                {
                    location: form.data.selectedCenter,
                    tour_date: form.data.selectedTourDate,
                    child_first_name: form.data.childFirstName,
                    child_last_name: form.data.childLastName,
                    child_birth_date: `${form.data.childBirthDay}-${form.data.childBirthMonth}-${form.data.childBirthYear}`,
                    parent_first_name: form.data.parentFirstName,
                    parent_last_name: form.data.parentLastName,
                    parent_phone: form.data.parentPhone,
                    parent_email: form.data.parentEmail,
                    comments: form.data.comments,
                    source: `${cookies.get("utm_source") || ""}`,
                    medium: `${cookies.get("utm_medium") || ""}`,
                    campaign: `${cookies.get("utm_campaign") || ""}`,
                },
            ])
            .select()

        if (error) {
            console.log(error);
        }
        
        const req = await fetch(`/api/${form.data.selectedCenter}`)
        const res = await req.json()
        let centerInfo = await res.centerInfo
        let tourTime = new Date(form.data.selectedTourDate).toLocaleTimeString()

        const leadReq = await fetch(`https://live.childcarecrm.com/portal/index/forms/tour-booking?customerId=f1e0c921c46684f267d2eb52aa13f518&formId=b42a0ab3-0e2f-443b-ba55-bed7e2c55200&cid=${centerInfo.ccrmId}`, {
            "headers": {
              "accept": "*/*",
              "content-type": "multipart/form-data; boundary=----WebKitFormBoundarydmFkf657BtDEwxnx",
            },
            "body": `------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[tourTime][time]\"\r\n\r\n${tourTime}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][firstName]\"\r\n\r\n${form.data.parentFirstName}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][lastName]\"\r\n\r\n${form.data.parentLastName}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][phone]\"\r\n\r\n${form.data.parentPhone}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][email]\"\r\n\r\n${form.data.parentEmail}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][custom-value-1][]\"\r\n\r\n1\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][childInfo1][childFirstName]\"\r\n\r\n${form.data.childFirstName}\\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][childInfo1][childLastName]\"\r\n\r\n${form.data.childLastName}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][childInfo1][childDob][year]\"\r\n\r\n${form.data.childBirthYear}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][childInfo1][childDob][month]\"\r\n\r\n${form.data.childBirthMonth}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][childInfo1][childDob][day]\"\r\n\r\n${form.data.childBirthDay}\r\n------WebKitFormBoundarydmFkf657BtDEwxnx\r\nContent-Disposition: form-data; name=\"tour_booking_dynamic_form[lead][comments]\"\r\n\r\n${form.data.comments}\r\n`,
            method: "POST"
          });
2
        // console.log(leadReq.status);
        // console.log(form.data);

        if(leadReq.status >= 400) {
            const { data, error } = await supabase
            .from('leads').update({
                status: "Error, request unsuccessful."
            }).eq("parent_phone", form.data.parentPhone);


            return message(form, "An error occured while processing your request, please try again later.");
        }

        else {
            const { data, error } = await supabase
            .from('leads').update({
                status: "Request successful."
            }).eq("parent_phone", form.data.parentPhone);
        }

        cookies.set('tour', "scheduled", { path: "/" });
        throw redirect(302, '/success');
    }
};