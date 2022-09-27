import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ProductDetail.module.scss';
import ProductDetailsStatic from './ProductDetailsStatic';
import ProductImgLeft from './ProductImgLeft';
import ProductImgRight from './ProductImgRight';

const cx = classNames.bind(styles);

function ProductDetail() {
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
                        <Link className={cx('product-title-a', 'items')} to="/">
                            <span>Laptop, Máy Tính Xách Tay</span>
                        </Link>
                        <Link className={cx('product-title-a', 'items')} to="/">
                            <span>Laptop Asus</span>
                        </Link>
                        <Link className={cx('product-title-a', 'items')} to="/">
                            <span>Laptop Asus VivoBook</span>
                        </Link>
                    </span>
                </div>
                <div className={cx('detail-items')}>
                    <p className={cx('product-title-p')}>
                        Laptop Asus VivoBook A1503ZA-L1421W (i5 12500H/8GB RAM/512GB SSD/15.6 Oled/Win11/Bạc/Balo)
                    </p>
                    <div className={cx('product__container-items')}>
                        <div className={cx('container-item-left')}>
                            <div className={cx('item-left-img-main')}>
                                <ProductImgLeft />
                            </div>
                        </div>
                        <ProductImgRight />
                        <ProductDetailsStatic />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
