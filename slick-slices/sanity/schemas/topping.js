import { FaPepperHot as icon, FaSeedling } from "react-icons/fa";

// docs for schema types: https://www.sanity.io/docs/schema-types

export default {
  // computer name
  name: "topping",
  // visible title
  title: "Toppings",
  type: "document",
  icon: icon,
  fields: [
    {
      name: "name",
      title: "Topping name",
      type: "string",
      description: "The name of the topping",
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      description: "Is the topping suitable for vegetarians?",
      options: {
        layout: "checkbox",
      },
    },
  ],
  preview: {
    select: {
      name: "name",
      vegetarian: "vegetarian",
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? "🌱" : ""}`,
    }),
  },
};
