import { getAllEmployee } from "@/app/services/employee.service"
import { StatisticsData } from "./statistics-data"
import { EmployeeTable } from "./data-table"



export default async function EmployeePage() {

    const { users } = await getAllEmployee({ limit: 999 })



    return (
        <>
            <div className="flex flex-col gap-4">
                <StatisticsData />
                <div className="border bg-white p-6 rounded-lg flex flex-col gap-4">
                    <EmployeeTable employee={users} />
                </div >
            </div>
        </>
    )
}