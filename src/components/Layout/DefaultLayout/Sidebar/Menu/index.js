import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuContainer({ className }) {
    return (
        <Menu className={cx(className)}>
            <div className={cx('menu-container')}>
                <div className={cx('menu-sidebar-item')}>
                    <Link to="/hacom-ui" className={cx('red')}>
                        Laptop Theo Hãng
                    </Link>
                    <Link to="/hacom-ui">Laptop Acer</Link>
                    <Link to="/hacom-ui">Laptop Asus</Link>
                    <Link to="/hacom-ui">Laptop Alienware</Link>
                    <Link to="/hacom-ui">Laptop Dell</Link>
                    <Link to="/hacom-ui">Laptop HP</Link>
                    <Link to="/hacom-ui">Laptop Lenovo</Link>
                    <Link to="/hacom-ui">Laptop Apple</Link>
                    <Link to="/hacom-ui">Laptop MSI</Link>
                    <Link to="/hacom-ui">Laptop LG</Link>
                    <Link to="/hacom-ui">Laptop Gigabyle</Link>
                    <Link to="/hacom-ui">Laptop Concept D</Link>
                    <Link to="/hacom-ui">Laptop VGS Imperium</Link>
                    <Link to="/hacom-ui">Laptop Avita</Link>
                    <Link to="/hacom-ui">Microsoft Surface</Link>
                </div>
                <div className={cx('menu-sidebar-item')}>
                    <Link to="/hacom-ui" className={cx('red')}>
                        Laptop Gaming
                    </Link>

                    <Link to="/hacom-ui">Laptop Acer</Link>
                    <Link to="/hacom-ui">Laptop Dell</Link>
                    <Link to="/hacom-ui">Laptop Alienware</Link>
                    <Link to="/hacom-ui">Laptop HP</Link>
                    <Link to="/hacom-ui">Laptop Asus</Link>
                    <Link to="/hacom-ui">Laptop Lenovo</Link>
                    <Link to="/hacom-ui">Laptop MSI</Link>
                    <Link to="/hacom-ui">Laptop Gigabyle</Link>
                    <Link to="/hacom-ui" className={cx('red')}>
                        Laptop Theo nhu cầu
                    </Link>
                    <Link to="/hacom-ui">Laptop Đồ họa, kiến trúc</Link>
                    <Link to="/hacom-ui">Phổ thông văn phòng</Link>
                    <Link to="/hacom-ui">Mỏng nhẹ thời trang</Link>
                    <Link to="/hacom-ui">Laptop hỗ trợ mạng 5G</Link>
                </div>

                <div className={cx('menu-sidebar-item')}>
                    <Link to="/hacom-ui" className={cx('red')}>
                        Laptop Theo khoảng giá
                    </Link>
                    <Link to="/hacom-ui">Dưới 10 Triệu </Link>
                    <Link to="/hacom-ui">10 Triệu - 15 Triệu</Link>
                    <Link to="/hacom-ui">15 Triệu - 20 Triệu</Link>
                    <Link to="/hacom-ui">20 Triệu - 25 Triệu</Link>
                    <Link to="/hacom-ui">25 Triệu - 30 Triệu</Link>
                    <Link to="/hacom-ui">30 Triệu - 35 Triệu</Link>
                    <Link to="/hacom-ui">35 Triệu - 40 Triệu</Link>
                    <Link to="/hacom-ui">40 Triệu - 45 Triệu</Link>
                    <Link to="/hacom-ui">45 Triệu - 50 Triệu</Link>
                    <Link to="/hacom-ui">50 Triệu - 55 Triệu</Link>
                    <Link to="/hacom-ui">55 Triệu - 60 Triệu</Link>
                    <Link to="/hacom-ui">60 Triệu - 65 Triệu</Link>
                    <Link to="/hacom-ui">65 Triệu - 70 Triệu</Link>
                    <Link to="/hacom-ui">70 Triệu - 75 Triệu</Link>
                    <Link to="/hacom-ui">75 Triệu - 80 Triệu</Link>
                    <Link to="/hacom-ui">Trên 80 Triệu </Link>
                </div>
                <div className={cx('menu-sidebar-item')}>
                    <Link to="/hacom-ui" className={cx('red')}>
                        Laptop theo cấu hình
                    </Link>
                    <Link to="/hacom-ui"> CPU</Link>
                    <Link to="/hacom-ui"> VGA</Link>
                    <Link to="/hacom-ui"> RAM</Link>
                    <Link to="/hacom-ui"> Kích thước màn hình</Link>
                    <Link to="/hacom-ui"> Độ phân giải màn hình</Link>
                    <Link to="/hacom-ui"> Tần số màn hình</Link>
                    <Link to="/hacom-ui"> Cảm hứng màn hình</Link>
                    <Link to="/hacom-ui"> Cảm hứng màn hình</Link>
                    <Link to="/hacom-ui"> Hệ thống màn hình</Link>
                </div>
                <div className={cx('menu-sidebar-item', 'items-logo')}>
                    <div>
                        <div className={cx('items-img')}>
                            <Link to="/hacom-ui" className={cx('width-img-a')}>
                                <img
                                    alt="anh"
                                    className={cx('width-img')}
                                    src="https://hanoicomputercdn.com/media/brand/acer.png"
                                />
                            </Link>
                        </div>
                        <div className={cx('items-img')}>
                            <Link to="/hacom-ui" className={cx('width-img-a')}>
                                <img
                                    alt="anh"
                                    className={cx('width-img')}
                                    src="https://hanoicomputercdn.com/media/brand/lenovo.png"
                                />
                            </Link>
                        </div>
                        <div className={cx('items-img')}>
                            <Link to="/hacom-ui" className={cx('width-img-a')}>
                                <img
                                    alt="anh"
                                    className={cx('width-img')}
                                    src="https://hanoicomputercdn.com/media/brand/microsoft.png"
                                />
                            </Link>
                        </div>
                        <div className={cx('items-img')}>
                            <Link to="/hacom-ui" className={cx('width-img-a')}>
                                <img
                                    alt="anh"
                                    className={cx('width-img')}
                                    src="https://hanoicomputercdn.com/media/brand/gigabyte.png"
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className={cx('items-img')}>
                            <Link to="/hacom-ui" className={cx('width-img-a')}>
                                <img
                                    alt="anh"
                                    className={cx('width-img')}
                                    src="https://hanoicomputercdn.com/media/brand/fujitsu.png"
                                />
                            </Link>
                        </div>
                        <div className={cx('items-img')}>
                            <Link to="/hacom-ui" className={cx('width-img-a')}>
                                <img
                                    alt="anh"
                                    className={cx('width-img')}
                                    src="https://hanoicomputercdn.com/media/brand/vgs.png"
                                />
                            </Link>
                        </div>
                        <div className={cx('items-img')}>
                            <Link to="/hacom-ui" className={cx('width-img-a')}>
                                <img
                                    alt="anh"
                                    className={cx('width-img')}
                                    src="https://hanoicomputercdn.com/media/brand/avita.png"
                                />
                            </Link>
                        </div>
                        <div className={cx('items-img')}>
                            <Link to="/hacom-ui" className={cx('width-img-a')}>
                                <img
                                    alt="anh"
                                    className={cx('width-img')}
                                    src="https://hanoicomputercdn.com/media/brand/apple.png"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('menu-sidebar-item')}>
                    <Link to="/hacom-ui" className={cx('red')}>
                        Máy tính bảng
                    </Link>
                    <Link to="/hacom-ui">Máy tính bảng Apple</Link>
                    <Link to="/hacom-ui">Máy tính bảng Samsung</Link>
                    <Link to="/hacom-ui">Máy tính bảng Lenovo</Link>
                </div>
                <div className={cx('menu-sidebar-item')}>
                    <Link to="/hacom-ui" className={cx('red')}>
                        Điện thoại
                    </Link>
                    <Link to="/hacom-ui">Điện thoại Iphone</Link>
                </div>
                <div className={cx('menu-sidebar-item')}>
                    <Link to="/hacom-ui" className={cx('red')}>
                        Linh kiện Laptop
                    </Link>
                    <Link to="/hacom-ui" className={cx('red')}>
                        Phụ kiện Laptop
                    </Link>
                </div>

                <div className={cx('menu-sidebar-item')}>
                    <Link to="/hacom-ui" className={cx('red')}>
                        Phụ kiện Surface
                    </Link>
                </div>
            </div>
        </Menu>
    );
}

export default MenuContainer;
