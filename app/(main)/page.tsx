"use client"

// import RevenueChart from "@/components/charts/RevenueChart"
import {
  IconChartBar,
  IconCoin,
  IconTrendingDown,
  IconTrendingUp,
  IconUserBolt,
  IconUsers,
} from "@tabler/icons-react"

import { motion, Variants } from "framer-motion"

const dashboardStats = [
  {
    title: "Total Revenue",
    value: "$1,222,456",
    description: "Visitors for the last 6 months",
    trendText: "Trending up this month",
    trendValue: "12.5%",
    trendUp: true,
    icon: IconCoin,
    iconClass: "text-emerald-700",
    borderColor: "border-emerald-600",
    badgeClass:
      "border-emerald-600 text-emerald-600",
  },

  {
    title: "New Employees",
    value: "248",
    description: "Compared to last month",
    trendText: "New hires increased",
    trendValue: "+18",
    trendUp: true,
    icon: IconUsers,
    iconClass: "text-blue-700",
    borderColor: "border-blue-600",
    badgeClass:
      "border-blue-600 text-blue-600",
  },

  {
    title: "Active Accounts",
    value: "1,892",
    description: "Most users stayed active",
    trendText: "Stable account activity",
    trendValue: "94%",
    trendUp: true,
    icon: IconUserBolt,
    iconClass: "text-amber-500",
    borderColor: "border-amber-600",
    badgeClass:
      "border-amber-600 text-amber-600",
  },

  {
    title: "Growth Rate",
    value: "32%",
    description: "Quarterly performance review",
    trendText: "Slight slowdown detected",
    trendValue: "-2.4%",
    trendUp: false,
    icon: IconChartBar,
    iconClass: "text-red-700",
    borderColor: "border-red-600",
    badgeClass:
      "border-red-600 text-red-600",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,

    },
  },
}

const item_motion: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.80,
    filter: "blur(6px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.8,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Page() {
  return (
    <div className="space-y-4">
      <motion.div className="grid grid-cols-4 gap-4" variants={container} initial="hidden" animate="visible">
        {dashboardStats.map((item) => {
          const TrendIcon = item.trendUp
            ? IconTrendingUp
            : IconTrendingDown

          const MainIcon = item.icon

          return (
            <motion.div
              variants={item_motion}
              whileHover={{
                y: -2,
                transition: {
                  duration: 0.1,
                },
              }}
              key={item.title}
              className={`rounded-lg hover:shadow-md shadow border-l-4 bg-white flex flex-col gap-2 p-4 ${item.borderColor}`}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-gray-500 text-sm">
                  {item.title}
                </h1>

                <div
                  className={`border text-sm select-none rounded-full px-2 flex items-center gap-2 ${item.badgeClass}`}
                >
                  <TrendIcon className="size-4" />
                  {item.trendValue}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MainIcon
                  className={`size-10 ${item.iconClass}`}
                />

                <span className="font-bold text-3xl">
                  {item.value}
                </span>
              </div>

              <div className="mt-6">
                <span className="flex items-center gap-2 font-semibold">
                  {item.trendText}

                  <TrendIcon className="size-4" />
                </span>

                <span className="text-gray-500 text-sm">
                  {item.description}
                </span>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
      {/* <div className="max-w-lg">
        <RevenueChart />
      </div> */}
    </div>
  )
}