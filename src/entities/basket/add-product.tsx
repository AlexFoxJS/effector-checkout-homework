import { useStoreMap } from 'effector-react';
import { FC, useCallback, useMemo } from 'react';
import { Product } from '../../api';
import { $currentBasket, basketToggleClicked } from './model';
import { BuyNow } from './buy-now';

export const AddProductButton: FC<{ product: Product }> = ({ product }) => {
  const hasInBasket = useStoreMap({
    store: $currentBasket,
    keys: [product.id],
    fn: (basketProducts, [productId]) => basketProducts.some((exist) => exist.id === productId),
  });

  const addToBasket = useCallback(() => basketToggleClicked(product), [product]);

  const text = useMemo(() => (hasInBasket ? 'Remove from basket' : 'Add to basket'), [hasInBasket]);

  return (
    <>
      <button type="button" onClick={addToBasket}>
        {text}
      </button>
      {!hasInBasket && <BuyNow product={product} />}
    </>
  );
};
