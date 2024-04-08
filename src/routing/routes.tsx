import { RouteNames } from './route-names.ts'
import InputPage from '../pages/input-page/input-page.component.tsx'
import ResultPage from '../pages/result-page/result-page.component.tsx'

export const ROUTES = [
    { path: RouteNames.predict, element: <InputPage /> },
    { path: RouteNames.result, element: <ResultPage /> },
]
