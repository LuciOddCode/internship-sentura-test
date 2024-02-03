import React, {Component} from "react";
import { Weavy, WyChat } from "@weavy/uikit-web";


export class CreateUser extends Component {
    render() {

        const weavy = new Weavy();
        weavy.url = "https://738a955c9df54737b9de48803590bc14.weavy.io/";
        weavy.tokenFactory = async (refresh) => "wys_B5CGMIgT7IVCOY5oGk8WJIbAgVgKE92Cb8lY";


        return (
            <>


            </>
        );
    }
}