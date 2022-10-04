import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import request from '~/utils/request';
import styles from './ProductDetail.module.scss';
import ProductDetailsStatic from './ProductDetailsStatic';
import ProductImgLeft from './ProductImgLeft';
import ProductImgRight from './ProductImgRight';

const cx = classNames.bind(styles);

function ProductDetail() {
    const [productItem, setProductItem] = useState([]);
    const { productId, loaispID } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await request.get(`product?id=${productId}&loaispId=${loaispID}`);
                setProductItem(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getProduct();
    }, [productId, loaispID]);

    return (
        <div className={cx('wrapper')}>
            {productItem.map((result) => (
                <div className={cx('product__container')}>
                    <div className={cx('product__container-title')}>
                        <span className={cx('product-title-span')}>
                            <Link className={cx('product-title-a', 'home')} to="/">
                                <span>Trang chủ </span>
                            </Link>
                            <Link className={cx('product-title-a', 'items')} to="/">
                                <span>{result.title}</span>
                            </Link>

                            <Link className={cx('product-title-a', 'items')} to="/">
                                <span>{result.tensp}</span>
                            </Link>
                        </span>
                    </div>
                    <div classtensp={cx('detail-items')}>
                        <p className={cx('product-title-p')}>{result.tensp}</p>
                        <div className={cx('product__container-items')}>
                            <div className={cx('container-item-left')}>
                                <div className={cx('item-left-img-main')}>
                                    <ProductImgLeft key={result.anhsp} data={result.anhsp} />
                                </div>
                            </div>

                            <div>
                                <ProductImgRight key={result.id} data={result} />
                            </div>

                            <ProductDetailsStatic />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductDetail;
