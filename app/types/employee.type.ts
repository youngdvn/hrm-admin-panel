export interface Employee {
    id: number
    username: string
    firstName: string
    lastName: string
    image: string
    age: number
    gender: string
    email: string
    phone: string
    birthDate: string
    company: {
        department: string,
        name: string,
        title: string,
        address: {
            address: string,
            city: string,
            state: string,
            stateCode: string,
            postalCode: string,
            country: string
        }
    }
    role: string
}

export interface EmployeeResponse {
    users: Employee[]
    total: number
    skip: number
    limit: number
}