import { lazy } from 'react';
import GlobalLayout from './pages/_layout';

import Index from './pages/index';
import ProductList from './pages/products/index';
import ProductId from './pages/products/[id]';

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/products', element: <ProductList />, Index: true },
      { path: '/products/:id', element: <ProductId /> },
    ],
  },
];

export const pages = [
  { route: '/' },
  { route: '/product' },
  { route: '/product/:id' },
];
