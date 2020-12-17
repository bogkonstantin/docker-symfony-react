import User from "../models/User";

export const getUser = async (): Promise<User> => {
    const response = await fetch('/api/user');

    if (response.status !== 200) {
        throw new Error('TODO');
    }

    const data = await response.json();
    return new User(data.id, data.email);
}

export const updateUser = async (user: User) => {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };
    const response = await fetch(`/api/user/${user.id}`, options);

    if (response.status !== 200) {
        throw new Error('TODO');
    }

    return await response.json();
}
