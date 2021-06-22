module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "indent": "off",
        "comma-dangle": "off",
        "eol-last": "off",
        "vue/html-indent": "off",
        "no-tabs": "off",
        "semi": "off",
        "quotes": "off",
        "space-before-function-paren": ["error", "never"],
        "padded-blocks": "off",
        "curly": "off"
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ],
}
