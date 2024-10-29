import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps {
  className?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // Tipo correcto de evento
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, value, onChange, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        value={value}
        onChange={onChange} // Elimina la transformación para pasar el evento completo
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
