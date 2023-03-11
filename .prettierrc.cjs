module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  arrowParens: "avoid",
  printWidth: 80,
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
  plugins: [require("@trivago/prettier-plugin-sort-imports")],
};
