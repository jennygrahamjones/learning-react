import { MdPerson as icon } from "react-icons/md";

// docs for schema types: https://www.sanity.io/docs/schema-types

export default {
    // computer name
    name: "person",
    // visible title
    title: "Slicemasters",
    type: "document",
    icon: icon,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 100,
            },
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            description: "Tell us a bit about them"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true, // hotspot import area, for better previews/crops!
            },
        },
    ]
};
