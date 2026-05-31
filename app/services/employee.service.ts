import { Fetcher } from "@/lib/fetcher";
import { EmployeeResponse } from "../types/employee.type";

interface EmployeeParams {
    page?: number
    limit?: number
    role?: string
    search?: string
}

export async function getAllEmployee({
    page = 1, limit = 100,
}: EmployeeParams
) {
    const skip = (page - 1) * limit
    const params = new URLSearchParams({
        limit: String(limit),
        skip: String(skip)
    })

    return Fetcher<EmployeeResponse>(`https://dummyjson.com/users?${params.toString()}`)
}