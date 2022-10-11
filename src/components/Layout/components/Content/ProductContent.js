import request from '~/utils/request';

import { useState, useEffect } from 'react';
import ItemContentProduct from './ItemContentProduct';

function ProductContent({ data }) {
    const [productItem, setProductItem] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await request.get(`product?loaispId=${data}`);
                setProductItem(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getProduct();
    }, [data]);
    return (
        <>
            {productItem.map((result) => (
                <>
                    <ItemContentProduct key={result.id} data={result} />
                </>
            ))}
        </>
    );
}

export default ProductContent;
