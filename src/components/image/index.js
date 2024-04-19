
import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './image.module.scss';

const Image = forwardRef(({ src, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(1);
    };
    return (
        <img
            className={classNames(styles.wrapper)}
            ref={ref}
            src={fallback || src}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
