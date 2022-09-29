/* eslint-disable no-undef */
import Home from '~/Pages/Home';
import ProductDetails from '~/Pages/ProductDetails';
// import { HeaderOnly } from '~/components/Layout';
import Product from '~/Pages/Product';
import Cart from '~/Pages/Cart';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/Product',
        component: Product,
    },
    {
        path: `/ProductDetails`,
        component: ProductDetails,
    },
    {
        path: `/gio-hang`,
        component: Cart,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
