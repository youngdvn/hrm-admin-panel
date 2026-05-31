import React from "react"

type Props = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
            <div className="max-w-3xl w-full rounded-md overflow-hidden md:px-0 px-4">
                {children}
            </div>
        </div>
    )
}