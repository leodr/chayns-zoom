/* eslint-disable react/jsx-no-bind */
import { Button, PersonFinder } from 'chayns-components';
import { useChaynsUser } from 'chayns-hooks';
import React, { useState } from 'react';

export function App() {
    const { isAuthenticated } = useChaynsUser();
    const [person, setPerson] = useState();

    function handleLogin() {
        chayns.login();
    }

    if (!isAuthenticated) {
        return <Button onClick={handleLogin}>Einloggen</Button>;
    }

    return (
        <>
            {person && (
                <img
                    src={`https://sub60.tobit.com/u/${person.personId}?size=1000`}
                    alt={`Profilbild von ${person.fullName}`}
                />
            )}
            <div style={{ height: 12 }} />
            <PersonFinder
                onChange={(newPerson) => setPerson(newPerson)}
                placeholder="Person finden..."
            />
        </>
    );
}
