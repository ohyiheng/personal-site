export async function load(event) {
    const blogPosts = await event.locals.sanityClient
        .fetch(`*[_type == 'post']{title, 'slug': slug.current}`);
        
    return {
        'blogPosts': blogPosts
    }
}