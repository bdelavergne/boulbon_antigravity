import { defineField, defineType } from 'sanity'

export const homePage = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'hero',
            type: 'object',
            title: 'Hero Section',
            fields: [
                {
                    name: 'title',
                    type: 'object',
                    title: 'Main Title',
                    fields: [
                        { name: 'en', type: 'string', title: 'English' },
                        { name: 'fr', type: 'string', title: 'French' },
                    ]
                },
                {
                    name: 'subtitle',
                    type: 'object',
                    title: 'Subtitle',
                    fields: [
                        { name: 'en', type: 'string', title: 'English' },
                        { name: 'fr', type: 'string', title: 'French' },
                    ]
                },
                {
                    name: 'image',
                    type: 'image',
                    title: 'Background Image',
                    options: { hotspot: true }
                }
            ]
        }),
        defineField({
            name: 'modules',
            type: 'array',
            title: 'Page Builder',
            of: [
                { type: 'pillarsSection' },
                { type: 'interludeSection' },
                { type: 'textSection' }
            ]
        })
    ],
})
