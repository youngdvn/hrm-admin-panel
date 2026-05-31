"use client"

import { motion } from "framer-motion"
import {
    IconShieldCheck,
    IconUser,
    IconUsers,
    IconUserStar,
} from "@tabler/icons-react"
interface Props {
    card: {
        title: string
        value: number
        icon: keyof typeof iconMap
        description: string
    }

    index: number
}
const iconMap = {
    users: IconUsers,
    shield: IconShieldCheck,
    user: IconUser,
    star: IconUserStar
}

export function StatisticsCard({ card, index }: Props) {
    const Icon = iconMap[card.icon]

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.3,
                delay: index * 0.1,
            }}
            whileHover={{
                y: -6,
                scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        >
            <motion.div
                className="absolute -top-10 -right-10 size-32 rounded-full bg-slate-100"
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-500">
                        {card.title}
                    </span>

                    <h2 className="text-4xl font-black tracking-tight text-slate-900">
                        {card.value}
                    </h2>

                    <p className="text-sm text-slate-400">{card.description}</p>
                </div>

                <motion.div
                    whileHover={{
                        rotate: 8,
                        scale: 1.1,
                    }}
                    className="flex size-14 items-center justify-center rounded-2xl bg-slate-100"
                >
                    <Icon className="size-7 text-slate-700" />
                </motion.div>
            </div>
        </motion.div>
    )
}
