import { useEffect } from 'react';
import ProductContainer from '~/components/Layout/DefaultLayout/ProductContainer';

function Product() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <ProductContainer />;
}

export default Product;
