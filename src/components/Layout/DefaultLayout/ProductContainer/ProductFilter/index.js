import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './ProductFilter.module.scss';

const cx = classNames.bind(styles);
const active = 'active';
const inactive = null;
function ProductFilter({ data }) {
    const [selected, setSelected] = useState(1);
    const handleClick = (item) => () => {
        setSelected(item);
    };
    return (
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
                            <option value="">131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</option>
                            <option value="">43 Thái Hà - Đống Đa - Hà Nội</option>
                            <option value="">406 Tô Hiệu - Lê Chân - Hải Phòng</option>
                            <option value="">79 Nguyễn Văn Huyên - Cầu Giấy - Hà Nội</option>
                            <option value="">511 Quang Trung - Hà Đông - Hà Nội</option>
                            <option value="">520 Cách Mạng Tháng 8 - Quận 3 - TP HCM</option>
                            <option value="">398 Nguyễn Văn Cừ - Long Biên - Hà Nội</option>
                            <option value="">299 Minh Khai - Từ Sơn - Bắc Ninh</option>
                            <option value="">59 Thợ Nhuộm - Hoàn Kiếm - Hà Nội</option>
                            <option value="">CT4A Bắc Linh Đàm - Hoàng Mai - Hà Nội</option>
                            <option value="">77 Cao Lỗ - Đông Anh - Hà Nội</option>
                            <option value="">57 Trần Phú - Hà Đông - Hà Nội</option>
                            <option value="">135 Hùng Vương - Hoàng Văn Thụ - Bắc Giang</option>
                            <option value="">136 Lê Hoàn - Quốc Lộ 1A - Phủ Lý - Hà Nam</option>
                            <option value="">147 Lê Lợi - Thành Phố Vinh - Nghệ An</option>
                            <option value="">126 Lương Ngọc Quyến - Quang Trung - Thái Nguyên</option>
                            <option value="">Số 6 Trần Phú - Điện Biên - Thanh Hóa</option>
                            <option value="">500 Nguyễn Thị Thập - Quận 7 - TP. Hồ Chí Minh</option>
                            <option value="">Số 2 Thoại Ngọc Hầu - Tân Phú - TP. Hồ Chí Minh</option>
                        </select>

                        <div className={cx('horizontal-price-filter')}>
                            Lọc theo giá tiền:
                            <div className={cx('horizontal-price-filter-child')}>
                                <input value="0" />
                                <div className={cx('price-curency')}>₫</div>
                            </div>
                            <div className="horizontal-price-separator"> - </div>
                            <div className={cx('horizontal-price-filter-child')}>
                                <input value="0" />
                                <div className={cx('price-curency')}>₫</div>
                            </div>
                            <span className={cx('button-filter')}>Lọc</span>
                        </div>
                    </div>
                </div>
                <div className={cx('new-warehouse-item')}>
                    <div className="list-n">
                        <button className={cx('new-sort-zone')}>Hàng Mới</button>

                        <button className={cx('new-sort-zone')}>Xem Nhiều</button>
                        <button className={cx('new-sort-zone')}>Giá Giảm Nhiều</button>
                        <button className={cx('new-sort-zone')}>Giá Tăng Dần</button>
                        <button className={cx('new-sort-zone')}>Giá Giảm Dần</button>
                    </div>

                    <select title="Sắp xếp theo" className={cx('list-sort')}>
                        <option value="0">Lọc sản phẩm</option>

                        <option value="https://hacom.vn/laptop-tablet-mobile?sort=rating">Đánh giá</option>

                        <option value="https://hacom.vn/laptop-tablet-mobile?sort=name">Tên A-&gt;Z</option>
                    </select>

                    <div className={cx('paging', 'new-sort-zone-page')}>
                        <button
                            onClick={handleClick(1)}
                            className={cx('current', 'btn-page', selected === 1 ? active : inactive)}
                        >
                            1
                        </button>

                        <button onClick={handleClick(2)} className={cx('btn-page', selected === 2 ? active : inactive)}>
                            2
                        </button>

                        <button onClick={handleClick(3)} className={cx('btn-page', selected === 3 ? active : inactive)}>
                            3
                        </button>

                        <button onClick={handleClick(4)} className={cx('btn-page', selected === 4 ? active : inactive)}>
                            4
                        </button>

                        <button onClick={handleClick(5)} className={cx('btn-page', selected === 5 ? active : inactive)}>
                            5
                        </button>

                        <button onClick={handleClick(6)} className={cx('btn-page', selected === 6 ? active : inactive)}>
                            6
                        </button>

                        <button onClick={handleClick(7)} className={cx('btn-page', selected === 7 ? active : inactive)}>
                            7
                        </button>

                        <button className={cx('btn-page')}>next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductFilter;
