// utils/getLowestUnitPrice.js
export function getLowestUnitPrice(product) {
  if (!product?.colors || product.colors.length === 0) return null;

  let lowest = Infinity;

  product.colors.forEach(color => {
    color.packPrices?.forEach(pack => {
      if (pack.price && pack.packSize) {
        const unitPrice = pack.price / pack.packSize;
        if (unitPrice < lowest) lowest = unitPrice;
      }
    });
  });

  return lowest === Infinity ? null : lowest;
}
