import { getTime } from "date-fns";
import { format, toZonedTime } from "date-fns-tz";

interface FormatToLocalProps {
  utcDate: string;
  variant: string;
}
export function formatToLocal({
  utcDate,
  variant = "date",
}: FormatToLocalProps) {
  //

  // Convert UTC date to local time zone
  const localDate = toZonedTime(
    utcDate,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  );

  if (variant === "epoch") {
    return getTime(utcDate);
  }

  const formats: { [key: string]: string } = {
    date: "yyyy-MM-dd",
    time: "hh:mm a",
    datetime: "yyyy-MM-dd hh:mm a",
  };

  return format(localDate, formats[variant]);

  //
}
