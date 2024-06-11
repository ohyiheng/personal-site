export async function load(event) {
    const photosData = await event.locals.sanityClient.fetch("*[_type == 'photo']{ 'url': photo.asset->url, 'width': photo.asset->metadata.dimensions.width, 'height': photo.asset->metadata.dimensions.height}");

    return {
        photos: photosData.map((photo) => ({
            url: photo.url,
            width: photo.width,
            height: photo.height
        }))
    }
}