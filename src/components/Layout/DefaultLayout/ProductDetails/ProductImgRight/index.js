import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductImg.module.scss';
const cx = classNames.bind(styles);
function ProductImgRight({ data }) {
    const [count, setCount] = useState(1);
    const [items, setItems] = useState([]);

    // console.log(data);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setItems(items);
        }
    }, []);

    const addToCart = () => {
        let arr = [];
        let getLocalItems = JSON.parse(localStorage.getItem('data'));
        if (!getLocalItems) {
            localStorage.setItem('data', JSON.stringify([]));
            getLocalItems = JSON.parse(localStorage.getItem('data'));
            alert('Đã thêm thành công');
        }
        const findItem = getLocalItems.find((item) => {
            return item.id === data.id;
        });
        if (findItem) {
            findItem.count += 1;
            const newData = getLocalItems.map((item) => {
                if (item.id === findItem.id) {
                    return findItem;
                }
                return item;
            });
            localStorage.setItem('data', JSON.stringify(newData));
            // 1a 1b
        } else {
            data.count = 1;
            arr = [...getLocalItems, data];

            localStorage.setItem('data', JSON.stringify(arr));
        }
    };

    return (
        <div>
            <div className={cx('product_detail-meta')}>
                <div className={cx('product_detail-sku')}>
                    Mã SP: <span className={cx('sku')}>LTAU{data.id}</span>
                </div>
                <div className={cx('product_detail-separator')}></div>
                Đánh giá:
                <a href="#tab5" className={cx('product_detail-star')}>
                    <div className={cx('danh-gia-sao')}></div>
                </a>
                <a href="#tab5" className={'count-rate'}>
                    1
                </a>
                <div className={cx('product_detail-separator')}></div>
                <a href="#comment" className={cx('product_detail-view-counter')}>
                    Bình luận: <span className={cx('counter-number')}>3</span>
                </a>
                <div className={cx('product_detail-separator')}></div>
                <div className={cx('product_detail-view-counter')}>
                    Lượt xem: <span className={cx('counter-number')}>9051</span>
                </div>
            </div>
            <div className={cx('product-summary-item')}>
                <div className={cx('product-summary-item-title')}>Thông số sản phẩm</div>

                <ul className={cx('product-summary-item-ul')}>
                    {data.tentimkiem.map((result) => (
                        <>
                            <li>{result}</li>
                        </>
                    ))}
                </ul>
            </div>
            <div className={cx('price-2021')}>
                <p>Giá khuyến mại:</p>
                <span className={cx('gia-km-cu')}>1.299.000₫</span>
                <div className={cx('gia-thang-5')}>
                    <p>Giá đặc biệt ưu đãi tháng 9:</p>

                    <strong className={cx('giakm')}>{data.newprice}₫</strong>

                    <strong className={cx('giany')}>{data.oldprice}₫ </strong>

                    <label className={cx('tietkiem')}>Tiết kiệm {data.oldprice - data.newprice}</label>
                </div>

                <div className={cx('tra-gop-zero')}>Ưu đãi trả góp 0%</div>

                <div className={cx('gia-quet-vnpay')}>
                    Giá VNPAY:
                    <span>{data.newprice}₫</span>
                    <a href="/">Click xem chi tiết</a>
                </div>

                <div className={cx('product-summary-items')}>
                    <div className={cx('yellow-ribbon')}>Giá đã có VAT</div>

                    <div className={cx('yellow-ribbon')}>Bảo hành 24 Tháng</div>

                    <div className={cx('yellow-ribbon')}>Quét VNPAYQR giảm thêm 100k</div>
                </div>
            </div>
            <div className={cx('box-number-detail')}>
                <span className={cx('so-luong')}>Số lượng:</span>
                <span className={cx('new-cart-quantity')}>
                    <button className={cx('minor', 'quantity-change')} onClick={() => count > 0 && setCount(count - 1)}>
                        –
                    </button>
                    <input className={cx('buy-quantity', 'quantity-change')} value={count} placeholder="1" />
                    <button className={cx('add', 'quantity-change')} onClick={() => setCount(count + 1)}>
                        +
                    </button>
                </span>
                <button to="/gio-hang" className={cx('them-vao-gio-nao')} onClick={() => addToCart()}>
                    <FontAwesomeIcon icon={faCartPlus} /> <span>Thêm vào giỏ hàng</span>
                </button>

                <a className={cx('like-product')} href="/like" title="Thích sản phẩm này">
                    <FontAwesomeIcon className={cx('like-product-icon')} icon={faHeart} />
                </a>
            </div>
            <div className={cx('btn-buy')}>
                <div className={cx('top-buttons-th1')}>
                    <Link to="/gio-hang" className={cx('btn-buy-top')}>
                        <span>Đặt mua ngay</span> Giao hàng tận nơi nhanh chóng
                    </Link>
                </div>
                <div className={cx('bottom-buttons-th1')}>
                    <a className={cx('btn-buy-bottom')} href="/">
                        <span>TRẢ GÓP QUA THẺ VISA, MASTER,...</span>
                        Chỉ từ 1.583.250₫/ tháng (12 tháng)
                    </a>
                    <a className={cx('btn-buy-bottom')} href="/">
                        <span>TRẢ GÓP HỒ SƠ DUYỆT 15 PHÚT</span>
                        Chỉ từ 3.166.500₫/ tháng (6 tháng)
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductImgRight;
