
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3001/graphql",
  documents: "lib/**/*.ts",
  generates: {
    "lib/types/gql/": {
      preset: "client",
      plugins: []
    },
  }
};

export default config;
