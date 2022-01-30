/* eslint-disable react/jsx-no-bind */
import { Button, PersonFinder } from 'chayns-components';
import { useChaynsUser } from 'chayns-hooks';
import React from 'react';

export function App() {
    const { isAuthenticated } = useChaynsUser();

    function handleLogin() {
        chayns.login();
    }

    if (!isAuthenticated) {
        return <Button onClick={handleLogin}>Einloggen</Button>;
    }

    return (
        <PersonFinder onChange={console.log} placeholder="Person finden..." />
    );
}
