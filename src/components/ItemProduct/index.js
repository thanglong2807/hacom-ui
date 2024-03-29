import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ItemProduct.module.scss';

const cx = classNames.bind(styles);
function ItemProduct({ data }) {
    return (
        <div className={cx('product__container-item')}>
            <Link to={`/ProductDetails/${data.producttype}/${data.id}`}>
                <img src={data.images} className={cx('items-img')} alt={data.title} />
            </Link>
            <div className={cx('items-evaluate')}>
                <Link to={`/ProductDetails/${data.producttype}/${data.id}`} className={cx('items-evaluate-a')}>
                    <img src="https://hacom.vn/media/lib/star_0.png" alt="rate" className={cx('items-evaluate-img')} />
                    <span className={cx('items-evaluate-cound')}>(0)</span>
                </Link>
                <p>Mã: PCGM522</p>
            </div>
            <div className={cx('items-info')}>
                <h3 className={cx('items-info-name')}>
                    <Link style={{ 'text-align': 'initial' }} to={`/ProductDetails/${data.producttype}/${data.id}`}>
                        {data.nameproduct}
                    </Link>
                </h3>
                {!data.mota ? (
                    <ul>
                        <li>CPU Intel® Core™ i5-12500H Processor (18MB cache, up to 4.5GHz)</li>
                        <li>RAM 8GB DDR4 Onboard ( còn 1 khe ram trống)</li>
                    </ul>
                ) : (
                    <ul>
                        <li>{data.describe}</li>
                    </ul>
                )}
                <div>
                    <span className={cx('items-info-mprice')}> {data.oldprice}₫ </span>
                    <span className={cx('items-info-discount')}>
                        <span className={cx('noMinPrice')}>(Tiết kiệm: 19% )</span>
                    </span>
                </div>
                <span className={cx('items-info-price')}> {data.newprice}₫</span>
            </div>
            <div className={cx('items-action')}>
                <span className={cx('items-qty')}>
                    <i className="fa fa-check" aria-hidden="true"></i> Còn hàng
                </span>
            </div>
        </div>
    );
}

export default ItemProduct;
