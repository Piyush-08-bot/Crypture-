"use client"

import React from "react"
import { GitCommitVertical, TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

export default function LineChartCustomDots() {
  return (
    <div className="bg-black rounded-2xl p-6 shadow-md w-full max-w-3xl mx-auto">
  <div className="mb-4">
    <h2 className="text-xl font-semibold text-white">Line Chart – Custom Dots</h2>
    <p className="text-sm text-gray-400">January - June 2024</p>
  </div>

  <LineChart
    width={600}
    height={300}
    data={chartData}
    margin={{ top: 10, right: 12, left: 12, bottom: 0 }}
  >
    <CartesianGrid stroke="#2f2f2f" strokeDasharray="3 3" vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      axisLine={false}
      tickMargin={8}
      tickFormatter={(value) => value.slice(0, 3)}
      stroke="#aaa" // Light gray axis text
    />
    <Tooltip
      contentStyle={{ backgroundColor: "#0f172a", borderRadius: "8px", color: "#fff" }}
      labelStyle={{ color: "#fff" }}
    />
    <Line
      type="natural"
      dataKey="desktop"
      stroke="#2db4fd"
      strokeWidth={2}
      dot={({ cx, cy, payload }) => {
        const r = 24
        return (
          <GitCommitVertical
            key={payload.month}
            x={cx - r / 2}
            y={cy - r / 2}
            width={r}
            height={r}
            fill="#0f172a"
            stroke="#2db4fd"
          />
        )
      }}
    />
  </LineChart>

  <div className="mt-6 flex flex-col gap-2 text-sm">
    <div className="flex items-center gap-2 font-medium text-white">
      Trending up by 5.2% this month <TrendingUp className="h-4 w-4 text-blue-400" />
    </div>
    <div className="text-gray-400">
      Showing total visitors for the last 6 months
    </div>
  </div>
</div>

  )
}
