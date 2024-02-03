import React, { Component } from "react";
import "@weavy/uikit-web/dist/weavy.css";

class CreateUser extends Component {
    async createUser() {
        const weavyServer = "{https://738a955c9df54737b9de48803590bc14.weavy.io}";
        const apiKey = "{wys_B5CGMIgT7IVCOY5oGk8WJIbAgVgKE92Cb8lY}";

        const userPayload = {
            uid: "user-1",
            name: "John Doe",
            directory: "acme",
        };

        try {
            const response = await fetch(`${weavyServer}/api/users`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userPayload),
            });

            if (response.status === 201) {
                const userData = await response.json();
                console.log("User created successfully:", userData);

            } else {
                console.error("Error creating user:", response.statusText);

            }
        } catch (error) {
            console.error("Error:", error);

        }
    }

    componentDidMount() {

        this.createUser();
    }

    render() {
        return <></>;
    }
}

export default CreateUser;
