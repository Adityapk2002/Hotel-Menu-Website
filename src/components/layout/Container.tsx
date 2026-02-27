import { cn } from "../../lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "relative  mx-auto max-w-[475px] overflow-x-clip",
        className,
      )}
    >
      {children}
    </div>
  );
}
