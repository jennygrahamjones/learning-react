import { FaPizzaSlice as icon } from "react-icons/fa";
import PriceInput from '../components/PriceInput'

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
      inputComponent: PriceInput,
      description: "Price of the pizza in cents",
      options: {
        validation: (Rule) => Rule.min(1000).max(5000), // can contain any logic
        // TODO: add custom input component
      },
    },
    {
      name: "toppings",
      title: "Toppings",
      type: "array",
      of: [{ type: "reference", to: [{ type: "topping" }] }],
      description: "Toppings on the pizza",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      topping0: "toppings.0.name",
      topping1: "toppings.1.name",
      topping2: "toppings.2.name",
      topping3: "toppings.3.name",
    },
    prepare: ({ title, media, ...toppings }) => {
      // filter undefined toppings out
      const tops = Object.values(toppings).filter(Boolean);
      // return the preview object for the pizza
      return {
        title,
        media,
        subtitle: tops.join(", "),
      };
    },
  },
};
