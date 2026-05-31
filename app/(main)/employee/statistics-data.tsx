import { getAllEmployee } from "@/app/services/employee.service"


import { StatisticsCard } from "./statistisc-card"

export async function StatisticsData() {
    const { users } = await getAllEmployee({
        limit: 999,
    })

    const statisticsCards = [
        {
            title: "Total Employees",
            value: users.length,
            icon: "users",
            description: "All active employees"
        },
        {
            title: "Admins",
            value: users.filter((emp) => emp.role === "admin").length,
            icon: "shield",
            description: "System administrators"
        },
        {
            title: "Users",
            value: users.filter((emp) => emp.role === "user").length,
            icon: "user",
            description: "Regular employees"
        },
        {
            title: "Moderators",
            value: users.filter((emp) => emp.role === "moderator").length,
            icon: "star",
            description: "Management team"
        }
    ] as const

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {statisticsCards.map((card, index) => (
                <StatisticsCard key={card.title} card={card} index={index} />
            ))}
        </div>
    )
}
