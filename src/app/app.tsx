import React from 'react';
import '../App.css'
import {AppRouter} from "./router.tsx";
import {MantineProvider} from "@mantine/core";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
    const client = new QueryClient();

    return <MantineProvider>
      <QueryClientProvider client={client}>
        <AppRouter />
      </QueryClientProvider>
    </MantineProvider>
}

export default App
