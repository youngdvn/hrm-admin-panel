export interface LoginPayload {
    username: string
    password: string
}

export interface User {
    id: number
    username: string
    firstname: string
    lastname: string
    email: string
    image: string
}

export interface AuthResponse extends User {
    accessToken: string
    refreshToken: string
}