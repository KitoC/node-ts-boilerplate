module.exports = {
  defaultSeverity: "error",
  extends: ["tslint:recommended"],
  jsRules: { "object-literal-sort-keys": false, "trailing-comma": [false] },
  rules: {
    "trailing-comma": [false],
    quotemark: [true, "double"],
    "interface-name": [true, "never-prefix"],
    "object-literal-sort-keys": false,
    "no-console": false,
    "arrow-parens": [false, "ban-single-arg-parens"],
    "ordered-imports": false,
  },
  rulesDirectory: [],
};
