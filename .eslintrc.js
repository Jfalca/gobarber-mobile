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
    "plugins": [
        "react",
        'prettier'
    ],
    "rules": {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
      'import/prefer-default-export': 'off',
      "no-console": ["error", { allow: ["tron"] }],
    },
    settings:{
      "import/resolver":{
        "babel-plugin-root-import" : {
          rootPathSuffix: "src"
        }
      }
    },
};
