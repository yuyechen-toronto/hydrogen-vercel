import snowboard from '~/assets/snowboard-mobile.jpg';
import {Image} from '@shopify/hydrogen';

export function HeroImage() {
  return <Image src={snowboard} width="100" height="100" />;
}
