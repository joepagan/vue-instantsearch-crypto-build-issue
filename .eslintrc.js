module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        // ts: 'never',
        // tsx: 'never',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
        ],
      },
    ],
    "max-len": ["warn"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"]
  },
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx'],
    // },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      // node: {
      //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
      //   moduleDirectory: [
      //     './node_modules',
      //     './src/',
      //   ],
      // },
      // alias: {
      //   map: [
      //     ['@', './src'],
      //   ],
      //   extensions: ['.ts', '.js', '.jsx', '.json'],
      // },
    },
  },
  // overrides: [
  //   {
  //     files: ["*.ts", "*.tsx"],
  //     extends: [
  //       'airbnb-base',
  //       'airbnb-typescript/base',
  //       'plugin:vue/essential',
  //       'plugin:vue/vue3-recommended',
  //       // 'plugin:@typescript-eslint/eslint-recommended',
  //       // "plugin:@typescript-eslint/recommended",
  //     ],
  //     parser: "@typescript-eslint/parser",
  //     plugins: ["@typescript-eslint"],
  //   },
  // ],
};
