# Sourcing Data from an external API

To fix the issue where no *beer ratings* are being generated, please add `if (!beer.rating.average) return;` to your `gatsby-node.js` file inside the beers `for...of` loop.

The reason it is failing is because the last "beers" items in the API response are returning invalid strings instead of an object for the ratings. You need to add an `if statement` to your code to skip the beers with the incorrect data until they fix the API.

```js:title=gatsby/gatsby-node.js {10}
async function fetchBeersAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const res = await fetch('https://api.sampleapis.com/beers/ale');
  const beers = await res.json();

  for (const beer of beers) {
    if (!beer.rating.average) return;

    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json',
        contentDigest: createContentDigest(beer),
      },
    };

    actions.createNode({
      ...beer,
      ...nodeMeta,
    });
  }
}
```
