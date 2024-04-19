
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccounItem';
import { type } from '@testing-library/user-event/dist/type';
import { SearchBtn } from '~/components/icons';

import * as searchServices from '~/Services/searchService';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchValue, 500)

    const inputRef = useRef()
    
    const handleClear = () => 
        {setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounce);
            setSearchResult(result);

            setLoading(false)
        }

        fetchApi()
    }, [debounce]);

    const handleHideResult = () => {
        setShowResult(false)
    }
    return ( 
        <div>
            <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div
                    className={cx('search-result')}
                    tabIndex="-1"
                    {...attrs}
                >
                    {' '}
                    <PopperWrapper>
                        <h4 className={cx('search-tittle')}>
                            Accounts
                        </h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result}/>
                        ))}
                       
                    </PopperWrapper>
                </div>
            )}
    
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                ref={inputRef}
                value={searchValue}
                    placeholder="search accounts and video"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
            {/* khi có searrch value thì mới hiển thị */}
                {!!searchValue && !loading && (
                     <button className={cx('clear')} onClick={handleClear}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                 </button>
                )}
                {loading && <FontAwesomeIcon
                    className={cx('loading')}
                    icon={faSpinner}
                />}
                <Tippy content="tim kiem" placement="right">
                    <button className={cx('search-btn')}>
                        <SearchBtn />
                    </button>
                </Tippy>
            </div>
        </HeadlessTippy>
        </div>
     );
}

export default Search;