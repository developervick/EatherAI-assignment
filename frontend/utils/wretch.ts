import wretch from "wretch"



export const api = wretch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1`, {
    mode: "cors",
    content: "application/json",
})
