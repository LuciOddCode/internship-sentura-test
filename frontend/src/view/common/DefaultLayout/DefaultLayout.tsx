import {Component} from "react";
import "@weavy/uikit-web/dist/weavy.css";
import { WyMessenger } from "@weavy/uikit-web";
import {MainContent} from "../MainContent/MainContent";

export class DefaultLayout extends Component {



    render() {

        return (
            <MainContent/>
        );
    }
}

