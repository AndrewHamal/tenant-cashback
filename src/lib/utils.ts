import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const fileURL = process.env.BACKEND_URL;
export const apiURL = process.env.API_URL;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isMobile = (userAgent: string): boolean => {
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
};
