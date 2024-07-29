"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatToLocal } from "@/lib/time";
import { format } from "date-fns";
import { CartesianGrid, Line, LineChart, TooltipProps, XAxis } from "recharts";

const chartConfig = {
  percentage: {
    label: "Percentage",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface UserListProps {
  items: any[];
}

export default function ChartComponent({ items }: UserListProps) {
  const hasNoneFound =
    items === null || (Array.isArray(items) && items.length === 0);

  if (hasNoneFound) {
    return <div>No tests attempts found</div>;
  }

  const chartData = items
    .sort()
    .map((item) => ({
      date: formatToLocal({ utcDate: item.startedAt, variant: "epoch" }),
      percentage: Number(item.percentage),
    }))
    .sort((a, b) => Number(a.date) - Number(b.date));

  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 20,
          right: 20,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(unixTime) => format(new Date(unixTime), "  MMM-dd  ")}
          interval={0}
        />
        <ChartTooltip cursor={false} content={CustomTooltip} />
        <Line
          dataKey="percentage"
          type="natural"
          stroke="var(--color-percentage)"
          strokeWidth={2}
          dot={{
            fill: "var(--color-percentage)",
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  //

  if (active && payload && payload.length) {
    const date = format(new Date(label), "MMM dd, yyyy");
    const percentage = payload[0].value
      ? payload[0].value.toFixed(2)
      : Number(0).toFixed(2);
    return (
      <div className="custom-tooltip border bg-card p-4 text-foreground/80">
        <p>{`Date: ${date}`}</p>
        <p>{`Percentage: ${percentage}%`}</p>
      </div>
    );
  }

  return null;

  //
}
