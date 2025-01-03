import { defineField, defineType } from "sanity";

export const blogType = defineType({
    name: "blogs",
    type: "document",
    title: "My Blogs",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title"
        }),
        defineField({
            name: "body",
            type: "string",
            title: "Body"
        }),
        defineField({
            name: "category",
            type: "string",
            title: "Category"
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            options: {
                hotspot: true
            }
        })
    ]
})