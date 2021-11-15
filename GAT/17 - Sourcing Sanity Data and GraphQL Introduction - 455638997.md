# Sourcing Sanity Data and GraphQL Introduction

If you get a Gatsby error that says `Error: GraphQL API not deployed` then it means you haven't deployed your Sanity GraphQL API yet. In your `Sanity` folder you need to type the command `sanity graphql deploy production` and only then should you start the Gatsby server.

You also need to redeploy your Sanity Dataset to the Sanity GraphQL API after making changes to the fields of your Sanity schema files, you can use the same command `sanity graphql deploy production` to update your Sanity GraphQL API with the updated schema field names.

https://www.sanity.io/docs/graphql
https://github.com/sanity-io/gatsby-source-sanity#graphql-api
