"use client";

import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/lib/apollo";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
const font = Montserrat({ subsets: ["latin"] });
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={font.className}>
            <Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                  <ApolloProvider client={apolloClient}>
                     <ToastContainer
                        position="top-right"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        className="text-[13px]"
                     />
                     {children}
                  </ApolloProvider>
               </PersistGate>
            </Provider>
         </body>
      </html>
   );
}
