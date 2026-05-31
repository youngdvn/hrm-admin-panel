"use client"

import { Employee } from "@/app/types/employee.type"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Employee>[] = [
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "firstName",
        header: "First Name"
    },
    {
        accessorKey: "lastName",
        header: "Last Name"
    },
    {
        accessorKey: "gender",
        header: "Gender"
    },

]