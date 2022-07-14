import Header from '../components/Header/index';
import Breadcrumb from '../components/Breadcrumb/index';
import ItemList from '../components/ItemsList/index';

function index() {
    return (
        <div>
            <Header/>
            <Breadcrumb/>
            <ItemList/>
        </div>
    );
}

export default index;