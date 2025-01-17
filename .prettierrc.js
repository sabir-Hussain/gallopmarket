module.exports = {
  trailingComma: 'es5', // Use es5-compatible trailing commas
  tabWidth: 2, // Standard for JS/TS and markdown
  semi: true, // Consistent with most TS guidelines
  singleQuote: true, // Preferred for JS/TS projects
  bracketSpacing: true, // Readable object spacing
  bracketSameLine: false, // Aligns closing brackets consistently
  singleAttributePerLine: false, // Recommended for JSX readability
  proseWrap: 'preserve', // Allows markdown text wrapping to be determined by content
  endOfLine: 'lf', // Consistent line endings across systems
  printWidth: 80, // Recommended for readability in code and markdown
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2, // Specific for markdown
        proseWrap: 'always', // Wrap markdown content for better readability
        printWidth: 80, // Ensures Markdown isn't overly wide
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript', // Explicitly sets TypeScript parser
      },
    },
    {
      files: '*.tsx',
      options: {
        parser: 'typescript', // Ensures TSX formatting is consistent
      },
    },
  ],
};
