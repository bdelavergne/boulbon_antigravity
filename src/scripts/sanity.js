import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
    projectId: '6slug6ow',
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

const builder = createImageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}

export async function getEvents() {
    const events = await client.fetch('*[_type == "event"] | order(date asc)')
    return events
}

export async function getPageContent(page, section) {
    const content = await client.fetch(
        `*[_type == "pageContent" && page == $page && section == $section][0]`,
        { page, section }
    )
    return content
}

export async function getHomePage() {
    return await client.fetch('*[_type == "homePage"][0]')
}
