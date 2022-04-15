import { createEvent } from 'effector';

import { $currentBasket } from '../../entities/basket';
import { $deliveryType, $deliveryAddress } from '../delivery/model';

export const pageMounted = createEvent();

export const $checkoutProducts = $currentBasket;
export const $checkoutDeliveryType = $deliveryType;
export const $checkoutDeliveryAddress = $deliveryAddress;
