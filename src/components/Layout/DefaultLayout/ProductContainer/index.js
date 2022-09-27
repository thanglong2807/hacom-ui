import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import styles from './ProductContainer.module.scss';
import ProductFilter from './ProductFilter';
import ProductShowItem from './ProductShowItem';
import TitleCategory from './TitleCategory';
const cx = classNames.bind(styles);
function ProductContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product__container')}>
                <div className={cx('product__container-title')}>
                    <span className={cx('product-title-span')}>
                        <Link className={cx('product-title-a', 'home')} to="/">
                            <span>Trang chủ</span>
                        </Link>
                        <Link className={cx('product-title-a', 'items')} to="/">
                            <span>Laptop, Tablet, Mobile</span>
                        </Link>
                    </span>
                </div>
                <p className={cx('product-title-p')}>LAPTOP, TABLET, MOBILE</p>
                <div className={cx('product__container-items')}>
                    <TitleCategory />
                    <ProductFilter />
                    <ProductShowItem />
                </div>
            </div>
        </div>
    );
}

export default ProductContainer;
