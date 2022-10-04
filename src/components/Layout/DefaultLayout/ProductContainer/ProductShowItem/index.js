/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import classNames from 'classnames/bind';
import styles from './ProductShowItem.module.scss';
import ItemProduct from '~/components/ItemProduct';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
const active = 'active';
const inactive = null;
function ProductShowItem({ data }) {
    const [productItem, setProductItem] = useState(data);

    const [orderName, setOrderName] = useState('ASC');
    console.log(data);
    useEffect(() => {
        setProductItem(data);
    }, [data]);

    const [selected, setSelected] = useState(1);
    const handleClick = (item) => () => {
        setSelected(item);
    };
    const sortingname = (col) => {
        if (orderName === 'ASC') {
            const sorted = [...productItem].sort((a, b) => (a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1));
            setProductItem(sorted);
            setOrderName('DSC');
        }
        if (orderName === 'DSC') {
            const sorted = [...productItem].sort((a, b) => (a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1));
            setProductItem(sorted);
            setOrderName('ASC');
        }
    };
    const sortingpriceUP = (col) => {
        const sorted = [...productItem].sort((a, b) => (a[col] > b[col] ? 1 : -1));
        setProductItem(sorted);
    };
    const sortingpriceDow = (col) => {
        const sorted = [...productItem].sort((a, b) => (a[col] < b[col] ? 1 : -1));
        setProductItem(sorted);
    };

    return (
        <>
            <div className={cx('__container-items-products')}>
                <div className={cx('warehouse')}>
                    <div className={cx('warehouse-item')}>
                        <div className={cx('warehouse-item-left')}>
                            <select className={cx('list-sort')}>
                                <option value="">Tình trạng kho hàng</option>

                                <option value="https://hacom.vn/laptop-tablet-mobile?other_filter=in-stock">
                                    Còn hàng
                                </option>
                            </select>

                            <select className={cx('list-sort')}>
                                <option value="/laptop-tablet-mobile">Tất cả kho</option>
                                <option value="?storeId=ton101">131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</option>
                                <option value="?storeId=ton102">43 Thái Hà - Đống Đa - Hà Nội</option>
                                <option value="?storeId=ton103">406 Tô Hiệu - Lê Chân - Hải Phòng</option>
                                <option value="?storeId=ton104">79 Nguyễn Văn Huyên - Cầu Giấy - Hà Nội</option>
                                <option value="?storeId=ton105">511 Quang Trung - Hà Đông - Hà Nội</option>
                                <option value="?storeId=ton106">520 Cách Mạng Tháng 8 - Quận 3 - TP HCM</option>
                                <option value="?storeId=ton107">398 Nguyễn Văn Cừ - Long Biên - Hà Nội</option>
                                <option value="?storeId=ton110">299 Minh Khai - Từ Sơn - Bắc Ninh</option>
                                <option value="?storeId=ton111">59 Thợ Nhuộm - Hoàn Kiếm - Hà Nội</option>
                                <option value="?storeId=ton112">CT4A Bắc Linh Đàm - Hoàng Mai - Hà Nội</option>
                                <option value="?storeId=ton113">77 Cao Lỗ - Đông Anh - Hà Nội</option>
                                <option value="?storeId=ton114">57 Trần Phú - Hà Đông - Hà Nội</option>
                                <option value="?storeId=ton115">135 Hùng Vương - Hoàng Văn Thụ - Bắc Giang</option>
                                <option value="?storeId=ton116">136 Lê Hoàn - Quốc Lộ 1A - Phủ Lý - Hà Nam</option>
                                <option value="?storeId=ton117">147 Lê Lợi - Thành Phố Vinh - Nghệ An</option>
                                <option value="?storeId=ton118">
                                    126 Lương Ngọc Quyến - Quang Trung - Thái Nguyên
                                </option>
                                <option value="?storeId=ton119">Số 6 Trần Phú - Điện Biên - Thanh Hóa</option>
                                <option value="?storeId=ton120">500 Nguyễn Thị Thập - Quận 7 - TP. Hồ Chí Minh</option>
                                <option value="?storeId=ton121">Số 2 Thoại Ngọc Hầu - Tân Phú - TP. Hồ Chí Minh</option>
                            </select>

                            <div className={cx('horizontal-price-filter')}>
                                Lọc theo giá tiền:
                                <div className={cx('horizontal-price-filter-child')}>
                                    <input value="0" />
                                    <div className={cx('price-curency')}>₫</div>
                                </div>
                                <div className="horizontal-price-separator"> - </div>
                                <div className={cx('horizontal-price-filter-child')}>
                                    <input defaultValue="0" />
                                    <div className={cx('price-curency')}>₫</div>
                                </div>
                                <span className={cx('button-filter')}>Lọc</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('new-warehouse-item')}>
                        <div className="list-n">
                            <button className={cx('new-sort-zone')}>Hàng Mới</button>

                            <button onClick={() => sortingname('tensp')} className={cx('new-sort-zone')}>
                                A - Z
                            </button>
                            <button className={cx('new-sort-zone')}>Giá Giảm Nhiều</button>
                            <button onClick={() => sortingpriceUP('newprice')} className={cx('new-sort-zone')}>
                                Giá Tăng Dần
                            </button>
                            <button onClick={() => sortingpriceDow('newprice')} className={cx('new-sort-zone')}>
                                Giá Giảm Dần
                            </button>
                        </div>

                        <select title="Sắp xếp theo" className={cx('list-sort')}>
                            <option value="0">Lọc sản phẩm</option>

                            <option>Đánh giá</option>

                            <option>Tên A-&gt;Z</option>
                        </select>

                        <div className={cx('paging', 'new-sort-zone-page')}>
                            <button
                                onClick={handleClick(1)}
                                className={cx('current', 'btn-page', selected === 1 ? active : inactive)}
                            >
                                1
                            </button>

                            <button
                                onClick={handleClick(2)}
                                className={cx('btn-page', selected === 2 ? active : inactive)}
                            >
                                2
                            </button>

                            <button
                                onClick={handleClick(3)}
                                className={cx('btn-page', selected === 3 ? active : inactive)}
                            >
                                3
                            </button>

                            <button
                                onClick={handleClick(4)}
                                className={cx('btn-page', selected === 4 ? active : inactive)}
                            >
                                4
                            </button>

                            <button
                                onClick={handleClick(5)}
                                className={cx('btn-page', selected === 5 ? active : inactive)}
                            >
                                5
                            </button>

                            <button
                                onClick={handleClick(6)}
                                className={cx('btn-page', selected === 6 ? active : inactive)}
                            >
                                6
                            </button>

                            <button
                                onClick={handleClick(7)}
                                className={cx('btn-page', selected === 7 ? active : inactive)}
                            >
                                7
                            </button>

                            <button className={cx('btn-page')}>next</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('product__container')}>
                {productItem.map((result) => (
                    <div className={cx('product__container-items')}>
                        <ItemProduct key={result.id} data={result} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductShowItem;
