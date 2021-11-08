# Testing our formatMoney function

If your *Currency Strings* aren't matching in Jest when you test the `formatMoney` util function and the currency has spaces in it then it won't match, the reason is because the `Intl.NumberFormat` method uses non-breaking spaces. The `Intl.NumberFormat` method does this because you wouldn't want a currency to wrap onto multiple lines, but this causes the test to break because we use normal spaces in the strings that we type in our code.

If the currency you are testing contains spaces then you'll need to use this solution. Every space in the Currency String has to be replaced by `\xa0` for the test to pass. `\xa0` is the non-breaking space character.

```js:title=__tests__/utils/formatMoney.test.js {5,6,7,8,12,13,14,15}
import formatMoney from "../../utils/formatMoney";

describe("formatMoney function", () => {
  it("works with fractional units", () => {
    expect(formatMoney(1)).toBe("R\xa00,01"); // R 0,01
    expect(formatMoney(10)).toBe("R\xa00,10"); // R 0,10
    expect(formatMoney(99)).toBe("R\xa00,99"); // R 0,99
    expect(formatMoney(101)).toBe("R\xa01,01"); // R 1,01
  });

  it("leaves off cents on whole units", () => {
    expect(formatMoney(100)).toBe("R\xa01");  // R 1
    expect(formatMoney(21000)).toBe("R\xa0210"); // R 210
    expect(formatMoney(55340000)).toBe("R\xa0553\xa0400"); // R 553 400
    expect(formatMoney(785340000)).toBe("R\xa07\xa0853\xa0400"); // R 7 853 400
  });
})
```
