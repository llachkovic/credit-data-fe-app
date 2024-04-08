import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteNames } from './route-names.ts'
import { ROUTES } from './routes.tsx'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route
                element={<Navigate replace to={RouteNames.predict} />}
                path=""
            />
            {ROUTES.map((route) => (
                <Route
                    element={route.element}
                    path={route.path}
                    key={route.path}
                />
            ))}
        </Routes>
    )
}
