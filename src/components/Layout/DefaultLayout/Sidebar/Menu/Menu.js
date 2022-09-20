import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function Menu({ children, className }) {
    return (
        <div>
            <div className={cx('items', className)}>{children}</div>
        </div>
    );
}

export default Menu;
