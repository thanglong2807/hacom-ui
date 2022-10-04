import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import request from '~/utils/request';
import styles from './ProductContainer.module.scss';
// import ProductFilter from './ProductFilter';
import ProductShowItem from './ProductShowItem';
import TitleCategory from './TitleCategory';
import React from 'react';

const cx = classNames.bind(styles);
function ProductContainer() {
    const [productItem, setProductItem] = useState([]);
    const { loaispID } = useParams();
    const [nameproduct, setNameproduct] = useState();
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await request.get(`/product?loaispId=${loaispID}`);
                setProductItem(res.data);
                setNameproduct(res.data[0].title);
            } catch (error) {
                console.log(error.message);
            }
        };
        getProduct();
    }, [loaispID]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('product__container')}>
                <div className={cx('product__container-title')}>
                    <span className={cx('product-title-span')}>
                        <Link className={cx('product-title-a', 'home')} to="/">
                            <span>Trang chủ</span>
                        </Link>
                        <Link className={cx('product-title-a', 'items')} to="/">
                            <span>{nameproduct}</span>
                        </Link>
                    </span>
                </div>
                <p className={cx('product-title-p')}>{nameproduct}</p>
                <div className={cx('product__container-items')}>
                    <TitleCategory />
                    <ProductShowItem key={10} data={productItem} />
                </div>
            </div>
        </div>
    );
}

export default ProductContainer;
