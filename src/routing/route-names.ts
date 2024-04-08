export const RouteNames = {
    predict: '/predict',
    result: '/results/:resultId',
    resultUrl: (resultId: string) => `/results/${resultId}`,
    list: '/results',
}
