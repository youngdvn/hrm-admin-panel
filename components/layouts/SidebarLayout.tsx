
"use client"
import { navGroups } from "@/app/mocks/mNav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { IconLogout } from "@tabler/icons-react";


export default function SidebarLayout() {
    const pathname = usePathname()
    const router = useRouter()
    const handleLogout = () => {
        document.cookie = "is_logged_in=; path=/; max-age=0; samesite=lax"
        router.push("/login")
        router.refresh()
    }

    return (
        <div className="w-60 max-w-sm bg-white/70 border-r border-gray-300 overflow-y-auto">
            <aside className="flex flex-col p-4 gap-10 h-full">
                <div className="flex flex-col gap-0.5 ">
                    <div className="bg-linear-to-br from-primary via-20% to-primary/40 rounded-lg p-4">
                        <h4 className="font-bold text-xl text-white">HRM Panel</h4>
                        <p className="text-sm text-slate-200 leading-tight">Data Management Center</p>
                    </div>
                </div>
                <nav className="flex-1 overflow-y-auto ">
                    {navGroups.map((group) => (
                        <div key={group.title} className="mb-6">
                            <h3 className="text-xs uppercase font-semibold text-gray-400 mb-2">{group.title}</h3>
                            <ul className="flex flex-col gap-1">
                                {group.items.map((item) => {
                                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                                    return (
                                        <li key={item.href} >
                                            <Link
                                                href={item.href}
                                                className={cn("flex items-center gap-2 p-2 hover:bg-primary/30 rounded-lg transition-colors text-gray-700", isActive && "bg-primary/15 text-primary/80")}
                                            >
                                                {item.icon && <item.icon className="size-6" />}
                                                <span className="text-sm font-semibold">{item.label}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>
                <div className="mt-auto">
                    <Button type="button" variant="destructive" size={"lg"} className="w-full" onClick={handleLogout}>
                        Sign out <IconLogout />
                    </Button>
                </div>
            </aside>
        </div >
    );
}