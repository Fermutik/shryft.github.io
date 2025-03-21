import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getT(lang: string, namespace: string) {
  // Dynamically require the JSON file based on the provided language and namespace
  const translations = require(`../locales/${lang}/${namespace}.json`);

  // Return a function that retrieves the value by key
  return (key: string) => {
    return translations[key];
  };
}