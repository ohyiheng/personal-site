export async function load(event) {
    

    const nowUpdateData = await event.locals.sanityClient
        .fetch("*[_type == 'nowUpdate'] | order(_createdAt desc)[0]")
        .catch((err) => { console.log("Fetch now update failed: ", err.message) });

    return {
        title: "what i'm currently doing",
        nowUpdate: { date: nowUpdateData.date, content: nowUpdateData.updates }
    }
}

