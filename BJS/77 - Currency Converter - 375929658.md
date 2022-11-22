# Currency Converter

Hey folks!

The API for the Currency Converter now requires an API key. You can get a free API key [here](https://apilayer.com/marketplace/exchangerates_data-api).

Replace `yourapikey` in the following code with your API key.

```js
const myHeaders = new Headers();
myHeaders.append("apikey", "yourapikey");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
