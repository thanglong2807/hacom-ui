/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import classNames from 'classnames/bind';
import styles from './ProductShowItem.module.scss';
import ItemProduct from '~/components/ItemProduct';
import request from '~/utils/request';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ProductShowItem() {
    const [productItem, setProductItem] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await request.get('/');
                setProductItem(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getProduct();
    }, []);

    return (
        <div className={cx('product__container')}>
            {productItem.map((result) => (
                <ItemProduct key={result.id} data={result} />
            ))}
        </div>
    );
}

export default ProductShowItem;
