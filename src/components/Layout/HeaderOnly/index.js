import Header from '../DefaultLayout/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>{' '}
                {/*Children là 1 tham số đặc biệt dùng để truyền dữ liệu từ cha vào con */}
            </div>
        </div>
    );
}

export default HeaderOnly;
