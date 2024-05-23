import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    const tour = cookies.get('tour');

    if(tour != "scheduled") {
        cookies.delete('tour', { path: "/"})
        redirect(302, "/");
    }
};