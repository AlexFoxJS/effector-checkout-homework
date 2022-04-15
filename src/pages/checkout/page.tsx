/* eslint-disable @typescript-eslint/no-use-before-define */
import { FC, useEffect } from 'react';
import { useStore } from 'effector-react';
import { pageMounted, $checkoutProducts, $checkoutDeliveryType, $checkoutDeliveryAddress } from './model';

export const CheckoutPage: FC = () => {
  useEffect(() => pageMounted(), []);

  return (
    <section>
      <h2>Checkout</h2>
      <div>
        <ProductList />
        <DeliveryType />
        <DeliveryAddress />
      </div>
    </section>
  );
};

const ProductList: FC = () => {
  const checkoutProducts = useStore($checkoutProducts);
  const items = checkoutProducts.map(({ title }) => title);

  return <Wrapper title="products" items={items} />;
};

const DeliveryType: FC = () => {
  const checkoutDeliveryType = useStore($checkoutDeliveryType);

  return <Wrapper title="delivery type" items={[checkoutDeliveryType]} />;
};

const DeliveryAddress: FC = () => {
  const checkoutDeliveryAddress = useStore($checkoutDeliveryAddress);
  const items = checkoutDeliveryAddress ? [checkoutDeliveryAddress] : ['not selected!'];

  return <Wrapper title="delivery address" items={items} />;
};

const Wrapper: FC<{ title: string; items: string[] }> = ({ title, items }) => {
  return (
    <div>
      <p>{title}:</p>
      <ul>{items.length === 0 ? <li>not selected!</li> : items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
};
