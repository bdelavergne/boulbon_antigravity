import { defineField, defineType } from 'sanity'

export const pillarsSection = defineType({
    name: 'pillarsSection',
    title: 'Pillars Section',
    type: 'object',
    fields: [
        defineField({
            name: 'pillars',
            type: 'array',
            title: 'Pillars',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'title',
                        type: 'object',
                        title: 'Title',
                        fields: [
                            { name: 'en', type: 'string', title: 'English' },
                            { name: 'fr', type: 'string', title: 'French' },
                        ]
                    },
                    {
                        name: 'description',
                        type: 'object',
                        title: 'Description',
                        fields: [
                            { name: 'en', type: 'string', title: 'English' },
                            { name: 'fr', type: 'string', title: 'French' },
                        ]
                    },
                    {
                        name: 'link',
                        type: 'string',
                        title: 'Link URL'
                    },
                    {
                        name: 'image',
                        type: 'image',
                        title: 'Card Image',
                        options: { hotspot: true }
                    }
                ]
            }],
            validation: Rule => Rule.max(3)
        })
    ],
    preview: {
        select: {
            title: 'pillars.0.title.en'
        },
        prepare({ title }) {
            return {
                title: 'Pillars Section',
                subtitle: title ? `Starts with: ${title}` : 'Empty'
            }
        }
    }
})
