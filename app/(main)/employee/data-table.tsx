"use client"

import { Employee } from "@/app/types/employee.type"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IconDots } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"
import { FilterSection } from "./filter-section"

const tableHeader = [
    'ID', 'Photo', 'Email', 'Username', 'Department', 'Gender', 'Phone', 'Role', 'Action'
]

interface Props {
    employee: Employee[]
}

export function EmployeeTable({ employee }: Props) {
    const [search, setSearch] = useState("")
    const [role, setRole] = useState("all")
    const [gender, setGender] = useState("all")
    const [department, setDepartment] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const filterEmployee = employee.filter((emp) => {
        const fullName = `${emp.firstName} ${emp.lastName}`
        const matchSearch = fullName.toLowerCase().includes(search.toLowerCase())
        const matchRole = role === "all" ? true : emp.role == role
        const matchGender = gender === "all" ? true : emp.gender == gender
        const matchDepartment = department === "all" ? true : emp.company.department.toLowerCase() == department.toLowerCase()
        return (matchSearch && matchRole && matchGender && matchDepartment)

    })

    const resetFilter = () => {
        setSearch("")
        setCurrentPage(1)
        setDepartment("all")
        setRole("all")
        setGender("all")
    }


    const limit = 10
    const totalPages = Math.ceil(filterEmployee.length / limit)
    const paginatedEmployees = filterEmployee.slice((currentPage - 1) * limit, currentPage * limit)

    return (<>
        <FilterSection
            search={search}
            setSearch={setSearch}
            role={role}
            setRole={setRole}
            gender={gender}
            setGender={setGender}
            department={department}
            setDepartment={setDepartment}
            setCurrentPage={setCurrentPage}
            resetFilters={resetFilter}
        />
        <div className=" border rounded-lg">

            <Table >
                <TableCaption>Employee List</TableCaption>
                <TableHeader>
                    <TableRow>
                        {
                            tableHeader.map((item) => (
                                <TableHead className="last:text-right bg-slate-100 px-2!" key={item}>{item}</TableHead>
                            ))
                        }

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedEmployees.map((emp) => (
                        <TableRow key={emp.id}>
                            <TableCell className="text-center">{emp.id}</TableCell>

                            <TableCell><Image src={emp.image} alt="photo" width={40} height={40} /></TableCell>
                            <TableCell>{emp.email}</TableCell>

                            <TableCell>
                                {emp.firstName} {emp.lastName}
                            </TableCell>

                            <TableCell>
                                {emp.company.department}
                            </TableCell>

                            <TableCell className="capitalize">{emp.gender}</TableCell>

                            <TableCell>{emp.phone}</TableCell>

                            <TableCell className="capitalize">{emp.role}</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="size-8">
                                            <IconDots />
                                            <span className="sr-only">Open menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View</DropdownMenuItem>
                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem variant="destructive">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        <Pagination className="my-6 px-4 flex justify-end mt-auto">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => { setCurrentPage(pre => Math.max(pre - 1, 1)) }} className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}>
                    </PaginationPrevious>
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1

                    const shouldShow = (page === 1 || page === totalPages || page >= currentPage - 1 && page <= currentPage + 1)

                    if (!shouldShow) {
                        if (page === 2 || page === totalPages - 1)
                            return (
                                <PaginationItem key={page}>
                                    <PaginationEllipsis></PaginationEllipsis>
                                </PaginationItem>
                            )
                        return null
                    }

                    return (
                        <PaginationItem key={page}>
                            <PaginationLink onClick={() =>
                                setCurrentPage(page)
                            }
                                isActive={currentPage === page} className={page === currentPage ? "pointer-events-none" : ""}>{page}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}
                <PaginationItem>
                    <PaginationNext onClick={() => { setCurrentPage(pre => Math.min(pre + 1, totalPages)) }} className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}></PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    </>)
}