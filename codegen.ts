import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3001/graphql',
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['lib/**/*.ts'],
  generates: {
    './lib/types/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;