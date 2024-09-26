import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// A helper function to make everything work together with TailwindCSS
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
