// @ts-check

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["react", "next", "next/*"],
              message:
                "This package must remain framework-independent. See its CLAUDE.md.",
            },
          ],
        },
      ],
    },
  },
];
