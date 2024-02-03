import {Component} from "react";
import "@weavy/uikit-web/dist/weavy.css";
import { WyMessenger } from "@weavy/uikit-web";
import {Route, Routes} from "react-router-dom";
import CreateUser from "../../pages/CreateUser/CreateUser";
import {ListUser} from "../../pages/ListUser/ListUser";
import {UpdateUser} from "../../pages/UpdateUser/UpdateUser";
import {DeleteUser} from "../../pages/DeleteUser/DeleteUser";

export class MainContent extends Component {



    render() {
        return (
            <div className="flex flex-col md:flex-row pb-20 pt-20
                content-center
                bg-gradient-to-r
                from-green-200
                to-blue-300
                justify-center
                place-content-center
                hover:shadow-lg
                cursor-pointer
                relative
                ">
                <div className="flex-1">

                    <Routes>
                        <Route path='/' Component={CreateUser}></Route>
                        <Route path='/list' Component={ListUser}></Route>
                        <Route path='/update' Component={UpdateUser}></Route>
                        <Route path='/delete' Component={DeleteUser}></Route>
                    </Routes>

                </div>

            </div>
        );
    }
}