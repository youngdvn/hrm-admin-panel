import FooterLayout from "@/components/layouts/FooterLayout"
import HeaderLayout from "@/components/layouts/HeaderLayout"
import SidebarLayout from "@/components/layouts/SidebarLayout"
import React from "react"

type Props = {
    children: React.ReactNode
}
export default function MainLayout({ children }: Props) {
    return (
        <>
            <section className="flex">
                <SidebarLayout></SidebarLayout>

                <div className="flex flex-col flex-1">
                    <HeaderLayout></HeaderLayout>
                    <main className="flex-1 p-10 bg-gray-100 min-h-screen">{children}</main>
                    <FooterLayout></FooterLayout>
                </div>
            </section>
        </>
    )
}