import React, { Component } from "react";
import "@weavy/uikit-web/dist/weavy.css";

interface PropsCreateUser {

}

class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uid: "",
            name: "",
            directory: "",
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { uid, name, directory } = this.state;

        // Validate inputs if needed

        const weavyServer = "{WEAVY-SERVER}";
        const apiKey = "{API-KEY}";

        const userPayload = {
            uid,
            name,
            directory,
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
                // Handle success, update state, or perform other actions
            } else {
                console.error("Error creating user:", response.statusText);
                // Handle error, show a message, or perform other error handling
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle network errors or other unexpected errors
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    UID:
                    <input
                        type="text"
                        name="uid"
                        value={this.state.uid}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Directory:
                    <input
                        type="text"
                        name="directory"
                        value={this.state.directory}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <button type="submit">Create User</button>
            </form>
        );
    }
}

export default CreateUser;
