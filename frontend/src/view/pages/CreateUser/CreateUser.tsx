import React, { Component, ChangeEvent, FormEvent } from "react";













/*Used Chat GPT to generate this code as I am not familiar with API implementation  */












interface StateCreateUser {
    uid: string;
    name: string;
    directory: string;
}

export class CreateUser extends Component<{}, StateCreateUser> {
    constructor(props: {}) {
        super(props);

        this.state = {
            uid: "",
            name: "",
            directory: "",
        };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ [event.target.name]: event.target.value } as Pick<StateCreateUser, keyof StateCreateUser>);
    };

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { uid, name, directory } = this.state;



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

            } else {
                console.error("Error creating user:", response.statusText);

            }
        } catch (error) {
            console.error("Error:", error);

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

