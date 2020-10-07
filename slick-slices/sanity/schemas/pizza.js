import { FaPizzaSlice as icon } from "react-icons/fa";

// docs for schema types: https://www.sanity.io/docs/schema-types

export default {
  // computer name
  name: "pizza",
  // visible title
  title: "Pizzas",
  type: "document",
  icon: icon,
  fields: [
    {
      name: "name",
      title: "Pizza name",
      type: "string",
      description: "The name of the pizza",
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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // hotspot import area, for better previews/crops!
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the pizza in cents",
      options: {
        validation: (Rule) => Rule.min(1000).max(5000), // can contain any logic
        // TODO: add custom input component
      },
    },
  ],
};
