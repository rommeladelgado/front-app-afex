import React from 'react';
import './App.scss';
import RouterApp from "../../routes/Router";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import {BASE_URL} from "../../const/general";


const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache()
});
function App() {
    return (
        <ApolloProvider  client={client}>
            <div className="App">
                <RouterApp />
            </div>
        </ApolloProvider >
    );
}
export default App;
