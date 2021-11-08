# Testing our formatMoney function

If your *Currency Strings* aren't matching in Jest when you test the `formatMoney` util function and the currency has spaces in it then it won't match, the reason is because the `Intl.NumberFormat` method uses non-breaking spaces. The `Intl.NumberFormat` method does this because you wouldn't want a currency to wrap onto multiple lines, but this causes the test to break because we use normal spaces in the strings that we type in our code.

If the currency you are testing contains spaces then you'll need to use this solution. Every space in the Currency String has to be replaced by `\xa0` for the test to pass.

```js:title=__tests__/utils/formatMoney.test.ts {5,6}
import formatMoney from "../../utils/formatMoney";

describe("formatMoney function", () => {
  it("works with fractional units", () => {
    expect(formatMoney(1)).toBe("R\xa00,01"); // where `\xa0` is the non-breaking space for "R 0,01" to match
    expect(formatMoney(53125621456)).toBe("R\xa0531\xa0256\xa0214,56"); // where `\xa0` is the non-breaking spaces for "R 531 256 214,56" to match
  })
})
```
