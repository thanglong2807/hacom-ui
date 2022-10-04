import { faAnglesDown, faGift, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TodoCart.module.scss';
const cx = classNames.bind(styles);
function TodoCart() {
    const [count, setCount] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data === []) {
            setLoading(false);
        } else {
            setLoading(false);
            const getLocalItems = JSON.parse(localStorage.getItem('data'));
            setData(getLocalItems);
        }
    }, []);

    const removeItem = () => {
        localStorage.removeItem('data');
        setData([]);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('product__container-title')}>
                <span className={cx('product-title-span')}>
                    <Link className={cx('product-title-a', 'home')} to="/">
                        <span>Trang chủ</span>
                    </Link>
                    <Link className={cx('product-title-a', 'items')} to="/">
                        <span>Giỏ hàng của bạn</span>
                    </Link>
                </span>
                {loading ? (
                    <>
                        <h3 className={cx('title-h3')}>
                            Giỏ hàng <span>(0 sản phẩm)</span>
                        </h3>
                        <div className={cx('no-product-cart')}>
                            <img src="https://hacom.vn/template/july_2021/images/tk-shopping-img.png?v=1.1" alt="" />
                            <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                            <Link to="/">Tiếp tục mua sắm</Link>
                        </div>
                    </>
                ) : (
                    <div>
                        <h3 className={cx('title-h3')}>
                            Giỏ hàng <span>{`(${data.length} sản phẩm)`}</span>
                        </h3>
                        <div className={cx('cart-container')}>
                            <div className={cx('cart-container-left')}>
                                <div className={cx('cart-container-left-items')}>
                                    <div className={cx('cart-product-items-title')}>
                                        <input type="checkbox" /> Tất cả sản phẩm
                                    </div>
                                    <div className={cx('cart-product-items-price')}> Đơn giá</div>
                                    <div className={cx('cart-product-items-amount')}> Số lượng</div>
                                    <div className={cx('cart-product-items-into-money')}> Thành tiền</div>
                                    <div className={cx('cart-product-items-delete')}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </div>
                                </div>
                                {data.map((item, index) => (
                                    <div className={cx('cart-container-left-items')}>
                                        <div className={cx('cart-product-items-title')}>
                                            <input type="checkbox" />
                                            <div className={cx('product-items')}>
                                                <Link to="/">
                                                    <img
                                                        className={cx('product-items-img')}
                                                        src={item.anhsp[0]}
                                                        alt=""
                                                    />
                                                </Link>
                                                <div className={cx('product-items-chile')}>
                                                    <Link to="/">{item.tensp}</Link>
                                                    <span>
                                                        Mã SP:<b> {item.id} </b>
                                                    </span>
                                                    <div className={cx('gift')}>
                                                        <div className={cx('gift-items')}>
                                                            <FontAwesomeIcon
                                                                className={cx('gift-icon')}
                                                                icon={faGift}
                                                            />
                                                            Khuyễn mại
                                                        </div>
                                                        <div className={cx('gift-items')}>
                                                            <FontAwesomeIcon
                                                                className={cx('gift-icon')}
                                                                icon={faAnglesDown}
                                                            />
                                                            Mua sau
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('cart-product-items-price', 'price-item')}>
                                            {item.newprice}
                                        </div>
                                        <div className={cx('cart-product-items-amount')}>
                                            <div className={cx('amount-items')}>
                                                <span className={cx('amount-items-span')}>
                                                    <button
                                                        onClick={() => {
                                                            item.count > 1 && setCount((item.count -= 1));
                                                        }}
                                                        title="tru"
                                                    >
                                                        <FontAwesomeIcon icon={faMinus} />
                                                    </button>
                                                    <input value={item.count} size="5" />
                                                    <button onClick={() => setCount((item.count += 1))} title="them">
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('cart-product-items-into-money', 'red')}>
                                            {item.newprice * item.count}
                                        </div>
                                        <div className={cx('cart-product-items-delete')}>
                                            <button onClick={removeItem}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={cx('pay')}>
                                <div className={cx('pay-gift')}>
                                    <input placeholder="Mã giảm giá / quà tặng" />
                                    <button>áp dụng</button>
                                </div>
                                <div>
                                    <div className={cx('pay-item')}>
                                        <span>Tạm tính</span>
                                        <span className={cx('pay-price')}>6.967.000₫</span>
                                    </div>
                                    <div className={cx('pay-item')}>
                                        <span>Giảm giá</span>
                                        <span className={cx('pay-price')}>0₫</span>
                                    </div>
                                    <div className={cx('pay-item')}>
                                        <span>Thành tiền</span>
                                        <span className={cx('pay-price-pro', 'red')}>6.967.000₫</span>
                                    </div>
                                </div>
                                <span className={cx('pay-vat')}>(Đã bao gồm VAT nếu có)</span>
                                <button className={cx('pay-submit')}>Tiến hành đặt hàng</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TodoCart;
