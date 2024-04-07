module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'no-plusplus': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': [0],
    'import/prefer-default-export': [0],
    'react/no-array-index-key': [0],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
