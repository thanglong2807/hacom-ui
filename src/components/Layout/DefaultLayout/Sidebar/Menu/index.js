import classNames from 'classnames/bind';
import Menu from './Menu';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuContainer({ children, className }) {
    return (
        <Menu className={cx(className)}>
            <div className={cx('menu-container')}>{children}</div>
        </Menu>
    );
}

export default MenuContainer;
