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
            <HeaderLayout></HeaderLayout>
            <div>
                <SidebarLayout></SidebarLayout>
            </div>
            <main>{children}</main>
            <FooterLayout></FooterLayout>
        </>
    )
}