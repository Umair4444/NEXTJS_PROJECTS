import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({ name: 'author', title: 'Author Name', type: 'string' }),
    defineField({ name: 'content', title: 'Review Text', type: 'text' }),
    defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number', validation: Rule => Rule.min(1).max(5) }),
    defineField({ name: 'date', title: 'Review Date', type: 'datetime' }),
  ],
})
