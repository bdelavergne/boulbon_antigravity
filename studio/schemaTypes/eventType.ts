import { defineField, defineType } from 'sanity'

export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'object',
            fields: [
                { name: 'en', type: 'string', title: 'English Title' },
                { name: 'fr', type: 'string', title: 'French Title' },
            ],
        }),
        defineField({
            name: 'date',
            type: 'datetime',
        }),
        defineField({
            name: 'description',
            type: 'object',
            fields: [
                { name: 'en', type: 'text', title: 'English Description' },
                { name: 'fr', type: 'text', title: 'French Description' },
            ],
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'status',
            type: 'string',
            options: {
                list: [
                    { title: 'Available', value: 'available' },
                    { title: 'Sold Out', value: 'sold-out' },
                    { title: 'Private', value: 'private' },
                ],
            },
        }),
        defineField({
            name: 'artist',
            type: 'string',
            title: 'Artist',
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Price',
        }),
        defineField({
            name: 'maxTickets',
            type: 'number',
            title: 'Max Tickets',
        }),
        defineField({
            name: 'link',
            type: 'url',
        }),
    ],
})
