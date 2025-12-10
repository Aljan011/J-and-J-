// ======================
// SCHEMA TYPES INDEX
// ======================

// ===== IMPORT DOCUMENT TYPES =====
import { collectionType } from './documents/collection'
import { colorThemeType } from './documents/colorTheme'
import { pageType } from './documents/page'
import { productVariantType } from './documents/productVariant'

// ===== IMPORT SINGLETONS =====
import { homeType } from './singletons/homeType'
import { settingsType } from './singletons/settingsType'

// ===== IMPORT OBJECT TYPES =====

// -- module folder --
import { accordionGroupType } from './objects/module/accordionGroupType'
import { accordionType } from './objects/module/accordionType'
import { calloutType } from './objects/module/calloutType'
import { callToActionType } from './objects/module/callToActionType'
import { collectionReferenceType } from './objects/module/collectionReferenceType'
import { gridType } from './objects/module/gridType'
import { gridItemType } from './objects/module/gridItemType'
import { heroType } from './objects/module/heroType'
import { imageCallToActionType } from './objects/module/imageCallToActionType'
import { imageFeaturesType } from './objects/module/imageFeaturesType'
import { imageFeatureType } from './objects/module/imageFeatureType'
import { instagramType } from './objects/module/instagramType'
import { productFeaturesType } from './objects/module/productFeaturesType'
import { productReferenceType } from './objects/module/productReferenceType'

import { colorObjectType } from './objects/color/colorObject'

// -- link folder --
import { linkEmailType } from './objects/link/linkEmailType'
import { linkExternalType } from './objects/link/linkExternalType'
import { linkInternalType } from './objects/link/linkInternalType'
import { linkProductType } from './objects/link/linkProductType'

// -- hotspot folder --
import { imageWithProductHotspotsType } from './objects/hotspot/imageWithProductHotspotsType'
import { productHotspotsType } from './objects/hotspot/productHotspotsType'
import { spotType } from './objects/hotspot/spotType'

// -- customProductOption folder --
import { customProductOptionColorObjectType } from './objects/customProductOption/customProductOptionColorObjectType'
import { customProductOptionColorType } from './objects/customProductOption/customProductOptionColorType'
import { customProductOptionSizeObjectType } from './objects/customProductOption/customProductOptionSizeObjectType'
import { customProductOptionSizeType } from './objects/customProductOption/customProductOptionSizeType'

// -- collection folder --
import { collectionGroupType } from './objects/collection/collectionGroupType'
import { collectionLinksType } from './objects/collection/collectionLinksType'

// -- global folder --
import { footerType } from './objects/global/footerType'
import { menuType } from './objects/global/menuType'
import { menuLinksType } from './objects/global/menuLinksType'
import { notFoundPageType } from './objects/global/notFoundPageType'

// -- shopify folder --
import { collectionRuleType } from './objects/shopify/collectionRuleType'
import { inventoryType } from './objects/shopify/inventoryType'
import { optionType } from './objects/shopify/optionType'
import { placeholderStringType } from './objects/shopify/placeholderStringType'
import { priceRangeType } from './objects/shopify/priceRangeType'
import { productWithVariantType } from './objects/shopify/productWithVariantType'
import { proxyStringType } from './objects/shopify/proxyStringType'
import { shopifyCollectionType } from './objects/shopify/shopifyCollectionType'
import { shopifyProductType } from './objects/shopify/shopifyProductType'
import { shopifyProductVariantType } from './objects/shopify/shopifyProductVariantType'
import { shopType } from './objects/shopify/shopType'

// -- root objects --
import { seoType } from './objects/seoType'

// -- portableText folder --
import { portableTextType } from './portableText/portableTextType'
import { portableTextSimpleType } from './portableText/portableTextSimpleType'

// ===== IMPORT OTHER SCHEMAS (if any) =====
import author from '../schemas/author'
import blog from '../schemas/blog'
import category from '../schemas/category'
import blockContent from '../schemas/blockContent'
import product from '../schemas/product'
import order from '../schemas/order'
import test from '../schemas/test'
import customer from '../schemas/customer'
import products from '../schemas/products'
// import products from '../structure/products'

// ===== GROUP ARRAYS =====
const documents = [
  collectionType,
  colorThemeType,
  pageType,
  productVariantType,
  author,
  blog,
  category,
  blockContent,
  order,
  test,
  product,
  products,
  customer
]

const singletons = [homeType, settingsType]

const objects = [
  // module
  accordionGroupType,
  accordionType,
  calloutType,
  callToActionType,
  collectionReferenceType,
  gridType,
  gridItemType,
  heroType,
  imageCallToActionType,
  imageFeaturesType,
  imageFeatureType,
  instagramType,
  productFeaturesType,
  productReferenceType,

  // link
  linkEmailType,
  linkExternalType,
  linkInternalType,
  linkProductType,

  // hotspot
  imageWithProductHotspotsType,
  productHotspotsType,
  spotType,

  // customProductOption
  customProductOptionColorObjectType,
  customProductOptionColorType,
  customProductOptionSizeObjectType,
  customProductOptionSizeType,

  colorObjectType,

  // collection
  collectionGroupType,
  collectionLinksType,

  // global
  footerType,
  menuType,
  menuLinksType,
  notFoundPageType,

  // shopify
  collectionRuleType,
  inventoryType,
  optionType,
  placeholderStringType,
  priceRangeType,
  productWithVariantType,
  proxyStringType,
  shopifyCollectionType,
  shopifyProductType,
  shopifyProductVariantType,
  shopType,

  // root objects
  seoType,

  // portableText
  portableTextType,
  portableTextSimpleType,
]

// ===== FINAL EXPORT =====
export const schemaTypes = [
  ...documents,
  ...singletons,
  ...objects,
]
