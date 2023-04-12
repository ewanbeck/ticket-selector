/**
 * @name numberAsCurrency
 * @param number number
 * @summary Since the company is spanish and will only be taking payments in Euro, all prices can be in the ES format
 */
export default function numberAsCurrency(number: number): string {
  return new Intl.NumberFormat('en-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(number);
}
