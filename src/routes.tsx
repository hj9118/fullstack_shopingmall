import GlobalLayout from './pages/_layout';
import Index from './pages/index';
import CartIndex from './pages/cart/index';
import PaymentIndex from './pages/payment/index';
import ProductIndex from './pages/products/index';
import ProductId from './pages/products/[id]';

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/cart', element: <CartIndex /> , ndex: true},
      {path: '/payment', element: <PaymentIndex />, index: true},
      { path: '/products', element: <ProductIndex />, Index: true },
      { path: '/products/:id', element: <ProductId /> },
    ],
  },
];

export const pages = [
  { route: '/' },
  { routes: '/cart' },
  {routes: '/payment'},
  { route: '/product' },
  { route: '/product/:id' },
];
