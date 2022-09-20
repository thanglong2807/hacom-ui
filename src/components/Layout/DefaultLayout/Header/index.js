/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faTemperature0, faWrench } from '@fortawesome/free-solid-svg-icons';
import TopHeader from './TopHeader';
import { useState, useEffect, useRef } from 'react';
import MenuSearch from '../MenuSearch';

let cx = classNames.bind(styles);
function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();
    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }

        fetch(`https://6329b91ad2c97d8c526eab02.mockapi.io/product?namesearch=${searchValue}`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res);
            });
    }, [searchValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <header className={cx('header')}>
            <TopHeader />
            <div className={cx('header-bottom')}>
                <div className={cx('logo')}>
                    <img src="https://hanoicomputercdn.com/media/lib/01-09-2022/logo-hacom.png" />
                </div>
                <Tippy
                    visible={showResult && searchResult.length > 0}
                    onClickOutside={handleHideResult}
                    placement="bottom"
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-menu-container')} tabIndex="-1" {...attrs}>
                            {searchResult.map((result) => (
                                <MenuSearch key={result.id} data={result} />
                            ))}
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('search-input')}
                            ref={inputRef}
                            value={searchValue}
                            spellCheck={false}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setShowResult(true)}
                            placeholder="Nhập sản phẩm từ khóa cần tìm"
                        />
                        {!!searchValue && (
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        )}
                    </div>
                </Tippy>
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
