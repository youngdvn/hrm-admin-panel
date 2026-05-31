"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface FilterSectionProps {
    search: string
    setSearch: (value: string) => void

    role: string
    setRole: (value: string) => void

    gender: string
    setGender: (value: string) => void

    department: string
    setDepartment: (value: string) => void

    setCurrentPage: (value: number) => void
    resetFilters: () => void
}

export function FilterSection({
    search,
    setSearch,
    role,
    setRole,
    gender,
    setGender,
    department,
    setDepartment,
    setCurrentPage,
    resetFilters
}: FilterSectionProps) {

    const hasFilters =
        search ||
        role !== "all" ||
        gender !== "all" ||
        department !== "all"
    return (
        <div className="flex items-center gap-3">
            <Input
                value={search}
                placeholder="Search employee..."
                className="max-w-sm"
                onChange={(e) => {
                    setSearch(e.target.value)

                    setCurrentPage(1)
                }}
            />

            <Select
                value={role}
                onValueChange={(value) => {
                    setRole(value)
                    setCurrentPage(1)
                }}
            >
                <SelectTrigger className="">
                    <SelectValue placeholder="Select role" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>

                    <SelectItem value="admin">Admin</SelectItem>

                    <SelectItem value="user">User</SelectItem>

                    <SelectItem value="moderator">Moderator</SelectItem>
                </SelectContent>
            </Select>
            <Select
                value={gender}
                onValueChange={(value) => {
                    setGender(value)
                    setCurrentPage(1)
                }}
            >
                <SelectTrigger className="">
                    <SelectValue placeholder="Select gender" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">All Gender</SelectItem>

                    <SelectItem value="male">Male</SelectItem>

                    <SelectItem value="female">Female</SelectItem>

                </SelectContent>
            </Select>
            <Select
                value={department}
                onValueChange={(value) => {
                    setDepartment(value)
                    setCurrentPage(1)
                }}
            >
                <SelectTrigger className="">
                    <SelectValue placeholder="Select department" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>

                    <SelectItem value="engineering">Engineering</SelectItem>

                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="research and Development">Research and Development</SelectItem>
                    <SelectItem value="human Resources">Human Resources</SelectItem>
                    <SelectItem value="product Management">Product Management</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>

                </SelectContent>
            </Select>
            <Button onClick={resetFilters} disabled={!hasFilters} variant={"destructive"}>
                Reset Filter
            </Button>
        </div>
    )
}
