import { useEffect } from 'react';
import ProductDetail from '~/components/Layout/DefaultLayout/ProductDetails';

function ProductDetails() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <ProductDetail />;
}

export default ProductDetails;
