/* eslint-disable react/jsx-no-bind */
import { Button, PersonFinder } from 'chayns-components';
import { useChaynsUser } from 'chayns-hooks';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

export function App() {
    const { isAuthenticated } = useChaynsUser();
    const [person, setPerson] = useState();
    const [imageLoaded, setImageLoaded] = useState(false);

    function handleLogin() {
        chayns.login();
    }

    if (!isAuthenticated) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 12,
                    justifyContent: 'center',
                }}
            >
                <Button onClick={handleLogin}>Einloggen</Button>
            </div>
        );
    }

    return (
        <>
            <AnimatePresence>
                {person && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: imageLoaded ? 'auto' : 0 }}
                        exit={{ height: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <img
                            src={`https://sub60.tobit.com/u/${person.personId}?size=1500`}
                            alt={`Profilbild von ${person.fullName}`}
                            style={{ width: '100%' }}
                            onLoad={() => setImageLoaded(true)}
                        />
                        <div style={{ height: 12 }} />
                    </motion.div>
                )}
            </AnimatePresence>
            <PersonFinder
                onChange={(newPerson) => {
                    setPerson(newPerson);
                    setImageLoaded(false);
                }}
                placeholder="Person finden..."
            />

            <div
                // Buffer for the animation
                style={{ height: 600 }}
            />
        </>
    );
}
