module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            rules: {
                '@typescript-eslint/quotes': 'off',
                '@typescript-eslint/consistent-type-imports': 'off',
                '@typescript-eslint/indent': 'off',
                '@typescript-eslint/semi': 'off',
                'semi': 'off',
            },
        },
    ],
    rules: {
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        'react/react-in-jsx-scope': 'off',
        'semi': 'off',
        '@typescript-eslint/semi': 'off',
    },
};

