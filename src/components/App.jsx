/* eslint-disable react/jsx-no-bind */
import { Button, PersonFinder } from 'chayns-components';
import { useChaynsUser } from 'chayns-hooks';
import { AnimatePresence, motion } from 'framer-motion';
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
            <AnimatePresence>
                {person && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <img
                            src={`https://sub60.tobit.com/u/${person.personId}?size=1000`}
                            alt={`Profilbild von ${person.fullName}`}
                            style={{ width: '100%' }}
                        />
                        <div style={{ height: 12 }} />
                    </motion.div>
                )}
            </AnimatePresence>
            <PersonFinder
                onChange={(newPerson) => setPerson(newPerson)}
                placeholder="Person finden..."
            />

            <div
                // Buffer for the animation
                style={{ height: 600 }}
            />
        </>
    );
}
