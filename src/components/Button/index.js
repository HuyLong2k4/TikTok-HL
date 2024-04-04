import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, onClick }) {
    // to: link nội bộ
    let Comp = 'button';
    return (
        <Comp className={cx('wrapper')}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
