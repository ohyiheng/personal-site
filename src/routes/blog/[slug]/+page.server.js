import { error } from '@sveltejs/kit';

export async function load(event) {
    const { params } = event;
    const pageData = await event.locals.sanityClient
        .fetch(`*[_type == 'post' && slug.current == '${params.slug}'] {
            title,
            caption,
            body,
            publishedAt,
            tags,
            'imgUrl': mainImage.asset->url
          }[0]`);

    if (pageData.length == 0) throw error(404, "Post not found!");

    const date  = new Date(pageData.publishedAt);
    const dateStr = date.toLocaleDateString('en-MY', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

    return {
        title: pageData.title,
        caption: pageData.caption,
        body: pageData.body,
        date: dateStr,
        tags: pageData.tags,
        imgUrl: pageData.imgUrl
    }
}