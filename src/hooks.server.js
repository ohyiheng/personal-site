import { createClient } from "@sanity/client";
const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const sanityDataset = import.meta.env.VITE_SANITY_DATASET;
const sanityToken = import.meta.env.VITE_CMS_TOKEN

const sanity = createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    useCdn: true,
    apiVersion: '2024-06-10',
    token: sanityToken
})

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    event.locals.sanityClient = sanity;

    const response = await resolve(event);

    return response;
}
