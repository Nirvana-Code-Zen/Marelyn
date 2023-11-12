module.exports = {
    root: true,
    env: { browser: true, es2020: true, jest: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['import', 'react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
          'warn',
          { "allowConstantExport": true },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          { 
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_",
            "caughtErrorsIgnorePattern": "^_"
          }
        ],
        "no-console": ["error", { allow: ["error"] }],
        "react-hooks/exhaustive-deps": "off",
        'no-useless-escape': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        "indent": ['error', 2],
        "no-console": "error",
        "no-useless-escape": "off",
        "prefer-promise-reject-errors": "off",
        "import/no-default-export": "error",
        "import/order": [
          "error",
          {
            "alphabetize": {
              "order": "asc"
            },
            "groups": [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index"
            ],
            "newlines-between": "always"
          }
        ]
    }
}