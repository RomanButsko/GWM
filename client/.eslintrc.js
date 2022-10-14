module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb",
    "plugin:import/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx", "ts"] }],
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-underscore-dangle": "off",
    "no-var-requires": true,
    "no-any": true,
    "promise-function-async": true,
    "await-promise": true,
    "curly": true,
    "prefer-for-of": true,
    "forin": true,
    "no-console": [
      true,
      "log",
      "error"
    ],
    "no-debugger": true,
    "no-duplicate-super": true,
    "no-duplicate-switch-case": true,
    "no-invalid-template-strings": true,
    "no-misused-new": true,
    "no-return-await": true,
    "no-shadowed-variable": true,
    "no-switch-case-fall-through": true,
    "no-tautology-expression": true,
    "no-unused-variable": true,
    "no-var-keyword": true,
    "static-this": true,
    "switch-default": true,
    "triple-equals": false,
    "no-require-imports": false,
    "prefer-const": true,
    "arrow-return-shorthand": true,
    "class-name": true,
    "file-name-casing": [
      true,
      "kebab-case"
    ],
    "prefer-switch": [
      true,
      {
        "min-cases": 3
      }
    ],
    "switch-final-break": true,
    "import-spacing": true,
    "max-line-length": [
      true,
      120
    ],
    "no-trailing-whitespace": false,
    "quotemark": [
      true,
      "single"
    ],
    "semicolon": [
      true,
      "always"
    ],
    "trailing-comma": false,
    "indent": [
      true,
      "tabs",
      4
    ],
    "linterOptions": {
      "exclude": [
        "./src/**/*.d.ts"
      ]
    }


  }
}
