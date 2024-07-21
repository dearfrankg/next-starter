import { type ClassValue, clsx } from "clsx";
import { formatDistance, subDays } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function consoleJSON(data: any) {
  console.log(JSON.stringify(data, null, 2));
}

export function jsonString(data: any) {
  return JSON.stringify(data, null, 2);
}

export function timeAgo(date: Date) {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });
}
