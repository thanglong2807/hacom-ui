import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function Menu({ children, className }) {
    return <div className={cx(className)}>{children}</div>;
}

export default Menu;
