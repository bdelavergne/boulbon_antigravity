import { defineField, defineType } from 'sanity'

export const interludeSection = defineType({
    name: 'interludeSection',
    title: 'Interlude Section',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            title: 'Interlude Image',
            options: { hotspot: true }
        })
    ],
    preview: {
        select: {
            media: 'image'
        },
        prepare({ media }) {
            return {
                title: 'Interlude Section',
                media
            }
        }
    }
})
