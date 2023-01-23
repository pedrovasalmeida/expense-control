export function formatPrice(price = 0) {
  let handledPrice = price

  if (price <= 0) {
    handledPrice *= -1
  }

  const formattedPrice = handledPrice.toFixed(2).replace('.', ',')

  return `R$ ${formattedPrice}`
}
