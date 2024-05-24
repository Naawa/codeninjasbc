import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    const inquiry = cookies.get('inquiry');
    const tour = cookies.get('tour');
    
    if(inquiry == "success") {
        return {
            message: "We have received your inquiry. We will contact you shortly."
        }
    }
    else if (tour == "scheduled") {
        return {
            message: "We have scheduled your tour. See you soon!"
        }
    }
    else {
        cookies.delete('inquiry', { path: "/"})
        cookies.delete('tour', { path: "/"})
        redirect(302, "/");
    }
};