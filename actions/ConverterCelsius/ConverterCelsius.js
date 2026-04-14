"use server"

export default async function converterC(celsius) {

  let fahrenheit = (celsius * 1.8) + 32;

  return `${celsius}°C é igual a ${fahrenheit}°F`;
}