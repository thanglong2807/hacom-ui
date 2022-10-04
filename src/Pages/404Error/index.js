import { useEffect } from 'react';

function Error() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <h1>TRANG KHÔNG TỒN TẠI</h1>
        </div>
    );
}

export default Error;
