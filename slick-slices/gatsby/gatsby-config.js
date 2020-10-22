import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

// https://www.gatsbyjs.com/docs/gatsby-config/

export default {
  siteMetadata: {
    title: 'Slicks Slices',
    description: 'The best pizza place in Hamilton',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ndddri16',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
