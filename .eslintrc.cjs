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
        'semi': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
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
        "no-useless-escape": "off",
        "prefer-promise-reject-errors": "off",
        "import/no-default-export": "error",
        "import/order": [
          "error",
          {
            "newlines-between": "always",
            "alphabetize": {
              "order": "asc"
            },
            "groups": [
              "builtin",
              "external",
              "internal",
              "object",
              "type",
              "sibling",
              "parent",
              "index",
            ],
            "pathGroups": [
              { 
                "pattern": "~UI/**",
                "group": "internal",
                "position": "before"
              },
              { 
                "pattern": "~Components/**",
                "group": "internal",
                "position": "after"
              },
              { 
                "pattern": "~Pages/**",
                "group": "internal",
                "position": "before"
              },
              { 
                "pattern": "~module/*", 
                "group": "internal",
                "position": "after"
              },
            ]
          }
        ]
    }
}
