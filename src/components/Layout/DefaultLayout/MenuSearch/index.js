import classNames from 'classnames/bind';
import styles from './MenuSearch.module.scss';

let cx = classNames.bind(styles);
function MenuSearch({ data }) {
    return (
        <a href="/" className={cx('search-menu')}>
            <img src={data.avata} className={cx('search-menu-img')} alt={data.avata} />
            <div className={cx('search-menu-info')}>
                <p className={cx('search-menu-name')}>{data.name}</p>
                <p className={cx('search-menu-price')}>{data.newprice}</p>
                {console.log(data)}
            </div>
        </a>
    );
}

export default MenuSearch;
