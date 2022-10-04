/* eslint-disable no-undef */
import Home from '~/Pages/Home';
import ProductDetails from '~/Pages/ProductDetails';
// import { HeaderOnly } from '~/components/Layout';
import Product from '~/Pages/Product';
import Cart from '~/Pages/Cart';
import Error from '~/Pages/404Error';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/product/:loaispID',
        component: Product,
    },
    {
        path: '/productDetails/:loaispID/:productId',
        component: ProductDetails,
    },
    {
        path: '/gio-hang',
        component: Cart,
    },
    {
        path: '*',
        component: Error,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
