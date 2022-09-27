import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import MenuContainer from './Menu';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function SibarItem() {
    return (
        <div className={cx('sidebar-menus')}>
            <ul className={cx('items-ul')}>
                <Tippy
                    interactive={true}
                    placement="right-start"
                    render={(attrs) => (
                        <MenuContainer className={cx('menu-sidebar')} tabIndex="-1" {...attrs}>
                            <div className={cx('menu-sidebar-item')}>
                                <a className={cx('red')} href="/">
                                    Laptop Theo Hãng
                                </a>
                                <a href="/">Laptop Acer</a>
                                <a href="/">Laptop Asus</a>
                                <a href="/">Laptop Alienware</a>
                                <a href="/">Laptop Dell</a>
                                <a href="/">Laptop HP</a>
                                <a href="/">Laptop Lenovo</a>
                                <a href="/">Laptop Apple</a>
                                <a href="/">Laptop MSI</a>
                                <a href="/">Laptop LG</a>
                                <a href="/">Laptop Gigabyle</a>
                                <a href="/">Laptop Concept D</a>
                                <a href="/">Laptop VGS Imperium</a>
                                <a href="/">Laptop Avita</a>
                                <a href="/">Microsoft Surface</a>
                            </div>
                            <div className={cx('menu-sidebar-item')}>
                                <a className={cx('red')} href="/">
                                    Laptop Gaming
                                </a>

                                <a href="/">Laptop Acer</a>
                                <a href="/">Laptop Dell</a>
                                <a href="/">Laptop Alienware</a>
                                <a href="/">Laptop HP</a>
                                <a href="/">Laptop Asus</a>
                                <a href="/">Laptop Lenovo</a>
                                <a href="/">Laptop MSI</a>
                                <a href="/">Laptop Gigabyle</a>
                                <a className={cx('red')} href="/">
                                    Laptop Theo nhu cầu
                                </a>
                                <a href="/">Laptop Đồ họa, kiến trúc</a>
                                <a href="/">Phổ thông văn phòng</a>
                                <a href="/">Mỏng nhẹ thời trang</a>
                                <a href="/">Laptop hỗ trợ mạng 5G</a>
                            </div>

                            <div className={cx('menu-sidebar-item')}>
                                <a className={cx('red')} href="/">
                                    Laptop Theo khoảng giá
                                </a>
                                <a href="/">Dưới 10 Triệu </a>
                                <a href="/">10 Triệu - 15 Triệu</a>
                                <a href="/">15 Triệu - 20 Triệu</a>
                                <a href="/">20 Triệu - 25 Triệu</a>
                                <a href="/">25 Triệu - 30 Triệu</a>
                                <a href="/">30 Triệu - 35 Triệu</a>
                                <a href="/">35 Triệu - 40 Triệu</a>
                                <a href="/">40 Triệu - 45 Triệu</a>
                                <a href="/">45 Triệu - 50 Triệu</a>
                                <a href="/">50 Triệu - 55 Triệu</a>
                                <a href="/">55 Triệu - 60 Triệu</a>
                                <a href="/">60 Triệu - 65 Triệu</a>
                                <a href="/">65 Triệu - 70 Triệu</a>
                                <a href="/">70 Triệu - 75 Triệu</a>
                                <a href="/">75 Triệu - 80 Triệu</a>
                                <a href="/">Trên 80 Triệu </a>
                            </div>
                            <div className={cx('menu-sidebar-item')}>
                                <a className={cx('red')} href="/">
                                    Laptop theo cấu hình
                                </a>
                                <a href="/"> CPU</a>
                                <a href="/"> VGA</a>
                                <a href="/"> RAM</a>
                                <a href="/"> Kích thước màn hình</a>
                                <a href="/"> Độ phân giải màn hình</a>
                                <a href="/"> Tần số màn hình</a>
                                <a href="/"> Cảm hứng màn hình</a>
                                <a href="/"> Cảm hứng màn hình</a>
                                <a href="/"> Hệ thống màn hình</a>
                            </div>
                            <div className={cx('menu-sidebar-item', 'items-logo')}>
                                <div>
                                    <div className={cx('items-img')}>
                                        <a className={cx('width-img-a')} href="/">
                                            <img
                                                alt="anh"
                                                className={cx('width-img')}
                                                src="https://hanoicomputercdn.com/media/brand/acer.png"
                                            />
                                        </a>
                                    </div>
                                    <div className={cx('items-img')}>
                                        <a className={cx('width-img-a')} href="/">
                                            <img
                                                alt="anh"
                                                className={cx('width-img')}
                                                src="https://hanoicomputercdn.com/media/brand/lenovo.png"
                                            />
                                        </a>
                                    </div>
                                    <div className={cx('items-img')}>
                                        <a className={cx('width-img-a')} href="/">
                                            <img
                                                alt="anh"
                                                className={cx('width-img')}
                                                src="https://hanoicomputercdn.com/media/brand/microsoft.png"
                                            />
                                        </a>
                                    </div>
                                    <div className={cx('items-img')}>
                                        <a className={cx('width-img-a')} href="/">
                                            <img
                                                alt="anh"
                                                className={cx('width-img')}
                                                src="https://hanoicomputercdn.com/media/brand/gigabyte.png"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className={cx('items-img')}>
                                        <a className={cx('width-img-a')} href="/">
                                            <img
                                                alt="anh"
                                                className={cx('width-img')}
                                                src="https://hanoicomputercdn.com/media/brand/fujitsu.png"
                                            />
                                        </a>
                                    </div>
                                    <div className={cx('items-img')}>
                                        <a className={cx('width-img-a')} href="/">
                                            <img
                                                alt="anh"
                                                className={cx('width-img')}
                                                src="https://hanoicomputercdn.com/media/brand/vgs.png"
                                            />
                                        </a>
                                    </div>
                                    <div className={cx('items-img')}>
                                        <a className={cx('width-img-a')} href="/">
                                            <img
                                                alt="anh"
                                                className={cx('width-img')}
                                                src="https://hanoicomputercdn.com/media/brand/avita.png"
                                            />
                                        </a>
                                    </div>
                                    <div className={cx('items-img')}>
                                        <a className={cx('width-img-a')} href="/">
                                            <img
                                                alt="anh"
                                                className={cx('width-img')}
                                                src="https://hanoicomputercdn.com/media/brand/apple.png"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('menu-sidebar-item')}>
                                <a className={cx('red')} href="/">
                                    Máy tính bảng
                                </a>
                                <a href="/">Máy tính bảng Apple</a>
                                <a href="/">Máy tính bảng Samsung</a>
                                <a href="/">Máy tính bảng Lenovo</a>
                            </div>
                            <div className={cx('menu-sidebar-item')}>
                                <a className={cx('red')} href="/">
                                    Điện thoại
                                </a>
                                <a href="/">Điện thoại Iphone</a>
                            </div>
                            <div className={cx('menu-sidebar-item')}>
                                <a className={cx('red')} href="/">
                                    Linh kiện Laptop
                                </a>
                                <a className={cx('red')} href="/">
                                    Phụ kiện Laptop
                                </a>
                            </div>

                            <div className={cx('menu-sidebar-item')}>
                                <a className={cx('red')} href="/">
                                    Phụ kiện Surface
                                </a>
                            </div>
                        </MenuContainer>
                    )}
                >
                    <li className={cx('items-li')}>
                        <Link to="/product">
                            <FontAwesomeIcon icon={faLaptop} />
                            <span>Laptop, Tablet, Mobile</span>
                        </Link>
                    </li>
                </Tippy>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Phụ Kiện Laptop, PC, Mobile</a>
                </li>

                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">PC Gaming, Streaming</a>
                </li>

                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">PC Đồ Họa, Render, Máy Chủ</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">PC Văn Phòng, AIO, Mini PC</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Linh Kiện Máy Tính</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Tản Nhiệt PC, Cooling</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Màn Hình Máy Tính</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Phím Chuột, Ghế Game, Gear</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Máy Chơi Game, Tay Game</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Loa, Tai Nghe, Mic, Webcam</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Camera Quan Sát</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Máy In, Máy Chấm Công</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Thiết Bị Văn Phòng Khác</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">TB Siêu Thị, Máy Bán Hàng</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Họp, Giảng Dạy, Stream</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Thiết Bị Lưu Trữ, USB, Thẻ</a>
                </li>
                <li className={cx('items-li')}>
                    <span></span>
                    <a href="/">Thiết Bị Mạng, Phần Mềm</a>
                </li>
            </ul>
        </div>
    );
}

export default SibarItem;
