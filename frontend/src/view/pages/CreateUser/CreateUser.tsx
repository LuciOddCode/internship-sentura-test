import React, { Component } from "react";
import Weavy from "@weavy/client";
import { WeavyApp } from "@weavy/react";

export class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.weavy = new Weavy({
            jwt: "YOUR_JWT_TOKEN",
        });

        this.space = this.weavy.space({ key: "wys_B5CGMIgT7IVCOY5oGk8WJIbAgVgKE92Cb8lY" });
        this.app = this.space.app({ key: "my-app", type: "posts" });
    }

    render() {
        return (
            <WeavyApp
                weavy={this.weavy}
                spaceKey="my-space"
                appKey="my-app"
                appType="posts"
            />
        );
    }
}
