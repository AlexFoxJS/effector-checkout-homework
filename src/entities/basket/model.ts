import { createStore, createEvent } from 'effector';
import * as api from '../../api';

export const $currentBasket = createStore<api.Product[]>([]);

export const basketToggleClicked = createEvent<api.Product>();
$currentBasket.on(basketToggleClicked, (list, product) => {
  const alreadyInBasket = list.some((item) => item.id === product.id);
  if (alreadyInBasket) return list.filter((item) => item.id !== product.id);
  return [...list, product];
});

export const basketBuyNowClicked = createEvent<api.Product>();
$currentBasket.on(basketBuyNowClicked, (_, product) => [product]);
