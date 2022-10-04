import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import request from '~/utils/request';

import { useState, useEffect } from 'react';
import ItemContentProduct from './ItemContentProduct';

const cx = classNames.bind(styles);
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
    }, []);
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
