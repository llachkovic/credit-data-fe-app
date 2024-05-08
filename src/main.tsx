import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routing/app.routes.tsx'
import { LayoutComponent } from './components/layout/layout.component.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <LayoutComponent>
                    <AppRoutes />
                </LayoutComponent>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
)
