import {defineField, defineType} from "sanity"

export default defineType(
    {
        name : 'hero',
        type : 'document',
        title : 'Hero Section',
        fields : [
            defineField({
                name : 'title',
                type : 'string',
                title : 'Title'
            }),
            defineField({
             name : 'content',
             type : 'text',
             title : 'Description'
            }),
            defineField({
             name : 'buttontext',
             type : 'string',
             title : 'Button Text'
            }),
            defineField({
             name : 'poster',
             type : 'image',
             title : 'Poster Image'
            }),
        ]
    }
)

