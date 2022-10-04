import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Menu from '~/components/Layout/DefaultLayout/components/Menu';

let cx = classNames.bind(styles);

function TopHeader() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-top')}>
                <div className={cx('header-top-items')}>
                    <div className={cx('top-item')}>
                        <Tippy
                            interactive={true}
                            render={(attrs) => (
                                <div className={cx('header-menu1')} tabIndex="-1" {...attrs}>
                                    <span className={cx('header-menu1-span')}>Mua hàng trực tuyến (8h - 24h)</span>
                                    <span className={cx('header-menu1-span')}>Hỗ trợ kỹ thuật (9h - 21h30)</span>
                                    <span className={cx('header-menu1-span')}>
                                        Dịch vụ kỹ thuật - bảo hành (9h - 17h30)
                                    </span>
                                    <span className={cx('header-menu1-span')}>
                                        Dịch vụ kỹ thuật - bảo hành (9h - 17h30)
                                    </span>
                                </div>
                            )}
                        >
                            <span>Gọi mua hàng: 1900.1903</span>
                        </Tippy>
                    </div>

                    <div className={cx('top-item', 'linear-gradient')}>
                        <Tippy
                            offset={[400, 20]}
                            interactive={true}
                            placement="bottom"
                            render={(attrs) => (
                                <Menu className={cx('header-menu2')} tabIndex="-1" {...attrs}>
                                    <div className={cx('menu2-items-top')}>
                                        <Tippy
                                            interactive={true}
                                            offset={[400, 123]}
                                            placement="bottom"
                                            render={(attrs) => (
                                                <Menu className={cx('header-menu2')} tabIndex="-1" {...attrs}>
                                                    <div className={cx('menu2-bottom-items')}>
                                                        <div className={cx('menu2-bottom')}>
                                                            <h4>Tư vấn sản phẩm</h4>
                                                            <p>
                                                                <span>0981145239</span> Mr Duy (Tản nhiệt, Cooling)
                                                            </p>
                                                            <p>
                                                                <span>0962660318</span> Mr Cường (Workstation, Server)
                                                            </p>
                                                            <p>
                                                                <span>0983844490</span> Mr Hòa (Laptop Gaming)
                                                            </p>
                                                            <p>
                                                                <span>0981089066</span> Mr Linh (Gaming Gear, Console)
                                                            </p>
                                                            <p>
                                                                <span>0862096929</span> Mr Nghĩa (Thiết bị văn phòng)
                                                            </p>
                                                            <p>
                                                                <span>0984710688</span> Ms Nhật (Thiết bị siêu thị)
                                                            </p>
                                                        </div>
                                                        <div className={cx('menu2-bottom')}>
                                                            <h4>Tư vấn sản phẩm</h4>
                                                            <p>
                                                                <span>0981145239</span> Mr Duy (Tản nhiệt, Cooling)
                                                            </p>
                                                            <p>
                                                                <span>0962660318</span> Mr Cường (Workstation, Server)
                                                            </p>
                                                            <p>
                                                                <span>0983844490</span> Mr Hòa (Laptop Gaming)
                                                            </p>
                                                            <p>
                                                                <span>0981089066</span> Mr Linh (Gaming Gear, Console)
                                                            </p>
                                                            <p>
                                                                <span>0862096929</span> Mr Nghĩa (Thiết bị văn phòng)
                                                            </p>
                                                            <p>
                                                                <span>0984710688</span> Ms Nhật (Thiết bị siêu thị)
                                                            </p>
                                                        </div>

                                                        <div className={cx('menu2-bottom')}>
                                                            <h4>Tư vấn sản phẩm</h4>
                                                            <p>
                                                                <span>0981145239</span> Mr Duy (Tản nhiệt, Cooling)
                                                            </p>
                                                            <p>
                                                                <span>0962660318</span> Mr Cường (Workstation, Server)
                                                            </p>
                                                            <p>
                                                                <span>0983844490</span> Mr Hòa (Laptop Gaming)
                                                            </p>
                                                            <p>
                                                                <span>0981089066</span> Mr Linh (Gaming Gear, Console)
                                                            </p>
                                                            <p>
                                                                <span>0862096929</span> Mr Nghĩa (Thiết bị văn phòng)
                                                            </p>
                                                            <p>
                                                                <span>0984710688</span> Ms Nhật (Thiết bị siêu thị)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Menu>
                                            )}
                                        >
                                            <span className={cx('header-menu2-items')}>Hỗ trợ Hà Nội/Toàn quốc</span>
                                        </Tippy>

                                        <span className={cx('header-menu2-items')}>Hỗ trợ tại Hải Phòng</span>

                                        <span className={cx('header-menu2-items')}>Hỗ trợ tại Băc Ninh</span>

                                        <span className={cx('header-menu2-items')}>Hỗ trợ tại Bắc Giang</span>

                                        <span className={cx('header-menu2-items')}>Hỗ trợ tại phủ lý</span>

                                        <span className={cx('header-menu2-items')}>Hỗ trợ tại Thái Nguyên</span>
                                    </div>
                                    <p className={cx('menu2-items-p')}>Bán hàng ONLINE ( 8h - 24h hằng ngày )</p>
                                </Menu>
                            )}
                        >
                            <span>Khách Cá Nhân</span>
                        </Tippy>
                    </div>

                    <div className={cx('top-item', 'linear-gradient')}>
                        <span>Khách Doanh nghiệp</span>
                    </div>
                    <div className={cx('top-item', 'linear-gradient')}>
                        <span>Bán hàng - TP HCM</span>
                    </div>
                </div>
                <div className={cx('header-top-items')}>
                    <div className={cx('top-item')}>
                        <span> Tìm cửa hàng gần nhất</span>
                    </div>
                    <div className={cx('top-item')}>
                        <Tippy
                            interactive={true}
                            render={(attrs) => (
                                <div className={cx('header-menu1')} tabIndex="-1" {...attrs}>
                                    <Menu>
                                        <span className={cx('header-menu1-span')}>Chính sách, quy định chung</span>
                                        <span className={cx('header-menu1-span')}>Chính sách vận chuyển</span>
                                        <span className={cx('header-menu1-span')}>Chính sách bảo hành</span>
                                        <span className={cx('header-menu1-span')}>Chính sách cho doanh nghiệp</span>
                                        <span className={cx('header-menu1-span')}>Chính sách hàng chính hãng</span>
                                        <span className={cx('header-menu1-span')}>Chính sách nhập lại tính phí</span>
                                        <span className={cx('header-menu1-span')}>Hướng dẫn mua hàng trực tuyến</span>
                                    </Menu>
                                </div>
                            )}
                        >
                            <span>Hỗ trợ</span>
                        </Tippy>
                    </div>
                    <div className={cx('top-item')}>
                        <Tippy
                            interactive
                            render={(attrs) => (
                                <div className={cx('header-menu1')} tabIndex="-1" {...attrs}>
                                    <Menu>
                                        <span className={cx('header-menu1-span')}>Tra cứu bảo hành</span>
                                        <span className={cx('header-menu1-span')}>In hóa đơn điện tử</span>
                                        <span className={cx('header-menu1-span')}>Gửi yêu cầu bảo hành</span>
                                        <span className={cx('header-menu1-span')}>Góp ý, khiếu nại</span>
                                    </Menu>
                                </div>
                            )}
                        >
                            <span> Trung tâm dịch vụ</span>
                        </Tippy>
                    </div>
                    <div className={cx('top-item')}>
                        <span>Khuyến mại</span>
                    </div>
                    <div className={cx('top-item')}>
                        <Tippy
                            zIndex={100}
                            placement={'bottom-end'}
                            interactive
                            render={(attrs) => (
                                <div className={cx('header-menu1')} tabIndex="-1" {...attrs}>
                                    <Menu className="btn-menu">
                                        <span className={cx('header-menu1-span', 'btn', 'btn-login')}>Đăng nhập</span>
                                        <span className={cx('header-menu1-span', 'btn', 'register')}>Đăng kí</span>
                                        <span className={cx('header-menu1-span', 'btn', 'btn-google')}>
                                            Đăng nhập bằng Google
                                        </span>
                                        <span className={cx('header-menu1-span', 'btn', 'btn-fb')}>
                                            Đăng nhập bằng Facebook
                                        </span>
                                        <span className={cx('header-menu1-span', 'btn', 'btn-zalo')}>
                                            Đăng nhập bằng Zalo
                                        </span>
                                    </Menu>
                                </div>
                            )}
                        >
                            <span>Tài khoản</span>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
