
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewHome from './views/Home';
import ViewItemList from './views/ItemList';
import ViewdItemDetail from './views/ItemDetail';



function MainPage() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewHome/>}/>
          <Route path="/items" element={<ViewItemList/>}/>
          <Route path="/items/:id" element={<ViewdItemDetail/>}/>

          {/*  
          <Header />
          <Breadcrumb />
         <ItemList/> 
          <DetailItem />*/}
        </Routes>
      </BrowserRouter>
    
  );
}

export default MainPage;
