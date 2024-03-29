module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/ban-types': ['error', { types: { '{}': false } }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': ['error'],
    'no-duplicate-imports': ['error'],
    'no-extra-boolean-cast': 'off',
    'no-useless-escape': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/button-has-type': ['error'],
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
};
