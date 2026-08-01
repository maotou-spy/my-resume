import { clsx, type ClassValue } from 'clsx';

/** Combine class names conditionally. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
