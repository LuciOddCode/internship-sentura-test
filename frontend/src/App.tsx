import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {CreateUser} from "./view/pages/CreateUser/CreateUser";
import {ListUser} from "./view/pages/ListUser/ListUser";
import {GetUserDetails} from "./view/pages/GetUserDetails/GetUserDetails";
import {UpdateUser} from "./view/pages/UpdateUser/UpdateUser";
import {DeleteUser} from "./view/pages/DeleteUser/DeleteUser";
import "./index.css";




function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" Component={DefaultLayout}/>
          <Route path="/create" Component={CreateUser}/>
          <Route path="/list" Component={ListUser}/>
          <Route path="/get" Component={GetUserDetails}/>
          <Route path="/update" Component={UpdateUser}/>
          <Route path="/delete" Component={DeleteUser}/>
        </Routes>
   </BrowserRouter>
  );
}

export default App;
