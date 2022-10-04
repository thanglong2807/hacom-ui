import { useEffect } from 'react';
import TodoCart from '~/components/Layout/DefaultLayout/TodoCart';

function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <TodoCart />;
}

export default Cart;
