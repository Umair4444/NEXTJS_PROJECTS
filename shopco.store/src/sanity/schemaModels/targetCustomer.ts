import { defineField, defineType } from 'sanity';

export const targetCustomer = defineType({
  name: 'targetCustomer',
  title: 'Target Customer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
  ],
});
