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

    const response = await resolve(event);

    return response;
}
