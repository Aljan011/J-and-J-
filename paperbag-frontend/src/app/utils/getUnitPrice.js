export function getUnitPrice(product, colorName = "brown", packSize = null) {
  if (!product?.colors || product.colors.length === 0) return 0;

  const colorObj = product.colors.find((c) => c.name.toLowerCase() === colorName.toLowerCase());
  if (!colorObj) return 0;
  if (!colorObj.packPrices || colorObj.packPrices.length === 0) return 0;

  // Use packSize if given, else use product.defaultPack
  let selectedPackSize = packSize || product.defaultPack;
  let pack = colorObj.packPrices.find((p) => p.packSize === selectedPackSize);

  // fallback: if not found, take first pack
  if (!pack) pack = colorObj.packPrices[0];
  if (!pack) return 0;

  return pack.price / pack.packSize;
}
