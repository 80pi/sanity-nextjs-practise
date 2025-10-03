import {defineField, defineType} from 'sanity'
// -- without defineField and definetype we can create our schema
// export const eventType = {
//   name: 'event',
//   title: 'Event',
//   type: 'document',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//     },
//   ],
// }

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
