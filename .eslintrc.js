module.exports = {
"extends": [
    "airbnb"
],
"globals": {
    "document": true
},
"settings": {
    "import/resolver": {
    "node": {
        "paths": [
        "src"
        ]
    }
    }
},
"rules": {
    "react/prop-types": [
    "off"
    ],
    "react/no-unescaped-entities": "off",
    "no-nested-ternary": "off",
    "spaced-comment": "off",
    "react/react-in-jsx-scope": [
    "off"
    ],
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": [
    1,
    {
        "extensions": [
        ".js",
        ".jsx"
        ]
    }
    ],
    "no-console": "off",
    "max-len": "off",
    "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "Link" ],
        "specialLink": [ "to" ],
      }]
},
"env": {
    "browser": true,
    "node": true,
    "jest":true,
    }
}
  