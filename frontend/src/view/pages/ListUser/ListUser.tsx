import {Component} from "react";
import { Weavy, WyChat } from "@weavy/uikit-web";


export class ListUser extends Component {
    render() {

        const weavy = new Weavy();
        weavy.url = "https://myenvironment.weavy.io";
        weavy.tokenFactory = async (refresh) => "access_token";


        return (
            <></>
        );
    }
}