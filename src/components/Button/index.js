import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { faLadderWater } from '@fortawesome/free-solid-svg-icons';
//Link cho phép bạn tạo các liên kết dẫn đến các đường dẫn (URL) khác nhau trong ứng dụng của bạn mà không cần tải lại trang hoặc gửi yêu cầu mới đến máy chủ.

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    disabled = false,
    large = false,
    text = false,
    rounded = false,
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    // to: link nội bộ
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
}
export default Button;
