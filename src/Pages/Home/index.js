import Content from '~/components/Layout/components/Content';
import Product from '~/components/Layout/components/Product';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';
function Home() {
    return (
        <div>
            <Sidebar />
            <Content />
            <Product />
        </div>
    );
}

export default Home;
