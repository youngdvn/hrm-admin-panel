import React from "react"

type Props = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-5xl w-full p-6 bg-emerald-300 rounded-lg">
                {children}
            </div>
        </div>
    )
}