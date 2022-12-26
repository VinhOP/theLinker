import classNames from "classnames/bind";
import NavBar from "../../components/Navbar";
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)
function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <NavBar />
            <div className={cx('content')}> {children}</div>
        </div>
    );
}

export default DefaultLayout;