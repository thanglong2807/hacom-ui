/* eslint-disable no-undef */
import Home from '~/Pages/Home';
import ProductDetails from '~/Pages/ProductDetails';
// import { HeaderOnly } from '~/components/Layout';
import Product from '~/Pages/Product';
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
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
