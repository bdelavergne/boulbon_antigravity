import { defineField, defineType } from 'sanity'

export const textSection = defineType({
    name: 'textSection',
    title: 'Text Section',
    type: 'object',
    fields: [
        defineField({
            name: 'content',
            type: 'object',
            title: 'Content',
            fields: [
                { name: 'en', type: 'text', title: 'English Text', rows: 5 },
                { name: 'fr', type: 'text', title: 'French Text', rows: 5 },
            ]
        })
    ],
    preview: {
        select: {
            title: 'content.en'
        },
        prepare({ title }) {
            return {
                title: 'Text Section',
                subtitle: title || 'Empty'
            }
        }
    }
})
