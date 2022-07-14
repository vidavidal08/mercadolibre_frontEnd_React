import Header from './components/Header/index';
import Breadcrumb from './components/Breadcrumb/index';
import ItemList from './components/ItemsList/index';
import DetailItem from './components/DetailItem/index';
import React from 'react';


function MainPage() {
  return (
    <div>
     <Header/>
     <Breadcrumb/>
     {/* <ItemList/> */}
     <DetailItem/>

    </div>




  );
}

export default MainPage;
