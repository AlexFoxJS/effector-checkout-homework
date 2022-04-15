import { guard } from 'effector';

import * as basketPage from '../pages/basket/model';
import * as deliveryPage from '../pages/delivery/model';
import * as checkoutPage from '../pages/checkout/model';
import { historyPushFx } from '../entities/navigation';
import { basketBuyNowClicked } from '../entities/basket';

/** Корзина товаров */
guard({
  clock: basketPage.submitClicked,
  filter: basketPage.$basketCheckedUp,
  target: historyPushFx.prepend(() => '/delivery'),
});

/** Доставка заказа */
guard({
  clock: deliveryPage.pageMounted,
  filter: basketPage.$basketCheckedUp.map((checked) => !checked),
  target: historyPushFx.prepend(() => '/'),
});

/** Подтверждение адреса доставки заказа */
guard({
  clock: deliveryPage.formSubmitted,
  filter: deliveryPage.$submitDisabled.map((disabled) => !disabled),
  target: historyPushFx.prepend(() => '/checkout'),
});

/** Подтверждение заказа */
guard({
  clock: checkoutPage.pageMounted,
  filter: deliveryPage.$submitDisabled,
  target: historyPushFx.prepend(() => '/'),
});

/** Купить товар "сейчас" */
guard({
  clock: basketBuyNowClicked,
  filter: basketPage.$basketCheckedUp.map((checked) => checked),
  target: historyPushFx.prepend(() => '/delivery'),
});
