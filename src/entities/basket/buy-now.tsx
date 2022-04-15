import { FC, useCallback } from 'react';

import { Product } from '../../api';
import { basketBuyNowClicked } from './model';

export const BuyNow: FC<{ product: Product }> = ({ product }) => {
  const buyNow = useCallback(() => basketBuyNowClicked(product), [product]);

  return (
    <button type="button" onClick={buyNow}>
      Buy now!
    </button>
  );
};
