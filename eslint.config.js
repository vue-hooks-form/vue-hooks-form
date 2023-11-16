// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'off',
  },
  ignores: [
    'dist',
    'public',
    '.github',
    '.vscode',
    'docs',
    'playground',
    '*.md',
  ],
})
