import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    const inquiry = cookies.get('inquiry');

    if(inquiry != "success") {
        cookies.delete('inquiry', { path: "/"})
        redirect(302, "/");
    }
};