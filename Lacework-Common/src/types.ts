export type ApiError = {
    msg: string
    detail: string
}

export type LaceworkError = {
    message: string
}

// export const LaceworkErrorNotFoundError: LaceworkError = {
//     status: 404,
//     error: new Error('Fastly API returned the requested resource but it is marked as "deleted"')
// }

export type ResponseWithHttpInfo = {
    data: any,
    response: {
        status: number
        text: string
        body: any
    }
}