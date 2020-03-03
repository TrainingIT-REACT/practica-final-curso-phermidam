import { createContext } from 'react';

const UserContext = createContext({
    signedIn: false,
    updateUser: (username) => {}
});

export default UserContext;