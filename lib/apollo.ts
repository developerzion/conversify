import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
let apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const httpLink = createHttpLink({
   uri: apiUrl,
});

const authLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const token = localStorage.getItem('auth_token');
   // return the headers to the context so httpLink can read them
   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : "",
      },
   };
});

const apolloClient = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache({
      addTypename: false,
   }),
});

export default apolloClient;
