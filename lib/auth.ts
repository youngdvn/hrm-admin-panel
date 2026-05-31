import { AuthResponse, LoginPayload, User } from "@/app/types/auth.type"
import { api } from "./axios"

export async function login(payload: LoginPayload) {
    const res = await api.post<AuthResponse>("auth/login", payload)
    return res.data
}

export async function getMe(token: string) {
    const res = await api.get<User>("auth/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return res.data
}

export async function refreshToken(refreshToken: string) {
    const res = await api.post<{
        accessToken: string
        refreshToken: string
    }>("auth/refresh", refreshToken)
    return res.data
}
