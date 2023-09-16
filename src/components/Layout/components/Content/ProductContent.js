import request from '~/utils/request';
import React from 'react';
import { useState, useEffect } from 'react';
import ItemContentProduct from './ItemContentProduct';

function ProductContent({ data }) {
    const [productItem, setProductItem] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await request.get(`product?producttype=${data}`);
                setProductItem(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getProduct();
    }, [data]);
    return (
        <React.Fragment>

            {
                productItem.map((result) => (
                    <React.Fragment>
                        <ItemContentProduct key={result.id} data={result} />
                    </React.Fragment>
                ))
            }

        </React.Fragment>
    );
}

export default ProductContent;
