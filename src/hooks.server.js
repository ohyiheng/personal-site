import { createClient } from "@sanity/client";
import { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN } from '$env/static/private';

const sanity = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    useCdn: true,
    apiVersion: '2024-06-10',
    token: SANITY_TOKEN
})

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    event.locals.sanityClient = sanity;

    // Check if the request is for the proxied script
    if (event.url.pathname === '/script.js') {
        // Fetch the Umami script from its original location
        const script = await fetch('https://cloud.umami.is/script.js');
        const scriptContent = await script.text();

        // Return the script content with appropriate content-type
        return new Response(scriptContent, {
            headers: {
                'Content-Type': 'application/javascript',
            },
        });
    }

    return await resolve(event);
}
