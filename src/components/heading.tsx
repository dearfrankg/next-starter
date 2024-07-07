import { cn } from "@/lib/utils";

export function H1(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        "text-3xl font-bold tracking-tight sm:text-4xl",
        props.className,
      )}
    />
  );
}

export function H2(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={cn("text-2xl font-semibold tracking-tight", props.className)}
    />
  );
}

export function H3(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={cn("text-xl font-semibold tracking-tight", props.className)}
    />
  );
}
