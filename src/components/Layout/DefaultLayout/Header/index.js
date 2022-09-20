/* eslint-disable jsx-a11y/alt-text */
// import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faTemperature0, faWrench } from '@fortawesome/free-solid-svg-icons';
import TopHeader from './TopHeader';
let cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header')}>
            <TopHeader />
            <div className={cx('header-bottom')}>
                <div className={cx('logo')}>
                    <img src="https://hanoicomputercdn.com/media/lib/01-09-2022/logo-hacom.png" />
                </div>
                <div className={cx('search')}>
                    <input className={cx('search-input')} placeholder="Nhập sản phẩm từ khóa cần tìm" />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('header-bottom-right')}>
                    <div className={cx('bottom-right-items')}>
                        <FontAwesomeIcon className={cx('bottom-right-icon')} icon={faWrench} />
                        <span className={cx('bottom-right-item')}>Xây dựng cấu hình</span>
                    </div>
                    <div className={cx('bottom-right-items')}>
                        <FontAwesomeIcon className={cx('bottom-right-icon')} icon={faTemperature0} />
                        <span className={cx('bottom-right-item')}>Xây dựng cấu hình</span>
                    </div>
                    <div className={cx('bottom-right-items', 'cart')}>
                        <FontAwesomeIcon className={cx('bottom-right-cart')} icon={faCartShopping} />
                        <b className={cx('count-items-cart')}>0</b>
                        <span className={cx('bottom-right-item')}>Giỏ hàng</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
