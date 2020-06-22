module.exports = {
    "env": {
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        'prettier',
        'prettier/react'
    ],
    globals:{
      Atomics:'readonly',
      SharedArrayBuffer: 'readonly',
      __DEV__: 'readonly'
    },
    parser:'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": ["react", "jsx-a11y", "import", "react-hooks", "prettier"],
    "rules": {
      'react/prop-types': [0, { ignore: [], customValidators: [], skipUndeclared: true }],
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
      'import/prefer-default-export': 'off',
      "no-console": ["error", { allow: ["tron"] }],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react/jsx-one-expression-per-line": "off",
      "global-require": "off",
      "react-native/no-raw-text": "off",
      "no-param-reassign": "off",
      "no-underscore-dangle": "off",
      camelcase: "off",
      "no-console": ["error", { allow: ["tron"] }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-props-no-spreading": "off"
    },
    settings:{
      "import/resolver":{
        "babel-plugin-root-import" : {
          rootPathSuffix: "src"
        }
      }
    },
};
