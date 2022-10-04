import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MenuSearch.module.scss';
let cx = classNames.bind(styles);
function MenuSearch({ data }) {
    return (
        <Link to={`/ProductDetails/${data.loaispId}/${data.id}`} className={cx('search-menu')}>
            <img src={data.anhsp[0]} className={cx('search-menu-img')} alt={data.anhsp[0]} />
            <div className={cx('search-menu-info')}>
                <p className={cx('search-menu-name')}>{data.tensp}</p>
                <p className={cx('search-menu-price')}>{data.newprice}</p>
            </div>
        </Link>
    );
}

export default MenuSearch;
