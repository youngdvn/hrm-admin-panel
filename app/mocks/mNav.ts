import { NavGroup } from "@/app/types/menu.type";
import {
    IconLayout,
    IconUsers,
    IconBriefcase,
    IconFileText,
    IconSettings,
    IconCalendar
} from "@tabler/icons-react";



export const navGroups: NavGroup[] = [
    {
        title: "Quick Links",
        items: [
            { label: "Overview", href: "/", icon: IconLayout },
            { label: "Calendar", href: "/calendar", icon: IconCalendar },
        ],
    },
    {
        title: "Employees",
        items: [
            { label: "Employee List", href: "/employee", icon: IconUsers },
            { label: "Attendance", href: "/attendance", icon: IconCalendar },
        ],
    },
    {
        title: "Recruitment",
        items: [
            { label: "Job Openings", href: "/jobs", icon: IconBriefcase },
            { label: "Applications", href: "/applications", icon: IconFileText },
        ],
    },
    {
        title: "Payroll & Reports",
        items: [
            { label: "Payroll", href: "/payroll", icon: IconFileText },
            { label: "Reports", href: "/reports", icon: IconFileText },
        ],
    },
    {
        title: "System",
        items: [
            { label: "Settings", href: "/settings", icon: IconSettings },
        ],
    },
];