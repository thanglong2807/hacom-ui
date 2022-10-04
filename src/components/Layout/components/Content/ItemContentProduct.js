import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Content.module.scss';
const cx = classNames.bind(styles);

function ItemContentProduct({ data }) {
    return (
        <div className={cx('items-container')}>
            <div className={cx('items-img')}>
                <Link to={`/ProductDetails/${data.loaispId}/${data.id}`} className={cx('items-img-a')}>
                    <img className={cx('items-img-children')} src={data.anhsp[0]} alt={data.anhsp[0]} />
                </Link>
            </div>
            <div className={cx('items-evaluate')}>
                <Link to={`/ProductDetails/${data.loaispId}/${data.id}`} className={cx('items-evaluate-a')}>
                    <img src="https://hacom.vn/media/lib/star_0.png" alt="rate" className={cx('items-evaluate-img')} />
                    <span className={cx('items-evaluate-cound')}>(0)</span>
                </Link>
                <p>Mã: PCGM{data.id}</p>
            </div>
            <div className={cx('items-info')}>
                <h3 className={cx('items-info-name')}>
                    <Link to={`/ProductDetails/${data.loaispId}/${data.id}`}>{data.tensp}</Link>
                </h3>

                <div>
                    <span className={cx('items-info-mprice')}> {data.oldprice}đ </span>
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

export default ItemContentProduct;
