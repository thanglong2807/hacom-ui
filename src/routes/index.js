import Home from '~/Pages/Home';
import ProductDetails from '~/Pages/ProductDetails';
import { HeaderOnly } from '~/components/Layout';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/ProductDetails',
        component: ProductDetails,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
