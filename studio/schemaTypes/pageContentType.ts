import { defineField, defineType } from 'sanity'

export const pageContentType = defineType({
    name: 'pageContent',
    title: 'Page Content',
    type: 'document',
    fields: [
        defineField({
            name: 'page',
            type: 'string',
            title: 'Page Name',
        }),
        defineField({
            name: 'section',
            type: 'string',
            title: 'Section Name',
        }),
        defineField({
            name: 'content',
            type: 'object',
            fields: [
                { name: 'en', type: 'text', title: 'English Content' },
                { name: 'fr', type: 'text', title: 'French Content' },
            ],
        }),
    ],
})
