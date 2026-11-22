import aldiaaLogo from './img/aldiaa-logo.jpg';
import craftDrum from './img/craft-drum.jpg';
import designerMark from './img/designer-mark.svg';
import heroRoastery from './img/hero-roastery.jpg';
import offer1 from './img/offer-1.jpg';
import offer2 from './img/offer-2.jpg';
import offer3 from './img/offer-3.jpg';
import offer4 from './img/offer-4.jpg';
import offer5 from './img/offer-5.jpg';
import productBulgur from './img/product-bulgur.jpg';
import productChips from './img/product-chips.jpg';
import productMix from './img/product-mix.jpg';
import productPeanuts from './img/product-peanuts.jpg';
import productPopcorn from './img/product-popcorn.jpg';
import productRawchips from './img/product-rawchips.jpg';
import productSeeds from './img/product-seeds.jpg';
import storeFacade from './img/store-facade.jpg';
import storeFront from './img/store-front.jpg';

export const SITE_MEDIA = {
  logo: aldiaaLogo,
  designerMark,
  hero: heroRoastery,
  storeFront,
  storeFacade,
  craftDrum,
} as const;

export const PRODUCT_MEDIA: Record<string, string> = {
  'extra-mix': productMix,
  'afghan-seeds': productSeeds,
  'flavored-peanuts': productPeanuts,
  'coarse-bulgur': productBulgur,
  'roasted-chips': productChips,
  'raw-chips': productRawchips,
  popcorn: productPopcorn,
};

export const OFFER_MEDIA: Record<string, string> = {
  'offer-1': offer1,
  'offer-2': offer2,
  'offer-3': offer3,
  'offer-4': offer4,
  'offer-5': offer5,
};
