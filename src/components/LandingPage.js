import React, { useState, useEffect } from 'react';

function LandingPage() {
    const [textStates, setTextStates] = useState([
        { text: 'Innovate', fadeIn: false },
        { text: 'Enable', fadeIn: false },
        { text: 'Sustain', fadeIn: false }
    ]);
    const [fadeOut, setFadeOut] = useState(false);
    const [showAesthetix, setShowAesthetix] = useState(false);

    const fadeInTexts = () => {
        setTextStates(prevStates => {
            return prevStates.map((state, index) => {
                return { ...state, fadeIn: true }; // Set fadeIn to true for each text
            });
        });
    };

    const fadeAesthetix = () => {
        setTimeout(() => {
            setShowAesthetix(true);
        }, 2900);
    };


    useEffect(() => {
        fadeInTexts();

        // Fade out after 5 seconds
        const fadeOutTimer = setTimeout(() => {
            setFadeOut(true);
        }, 5000);

        // Clean up
        return () => clearTimeout(fadeOutTimer);
    }, []);

    // Listen for page reload
    useEffect(() => {
        window.addEventListener('beforeunload', fadeInTexts);
        return () => {
            window.removeEventListener('beforeunload', fadeInTexts);
        };
    }, []);

    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setTextStates(prevStates => {
                return prevStates.map(state => {
                    return { ...state, fadeIn: false };
                });
            });
            fadeAesthetix();
        }, 2600); // Delay after fade out completes

        // Clean up
        return () => clearTimeout(fadeOutTimer);
    }, [fadeOut]);

    return (
        <div className="app-container h-screen flex justify-center items-center">
            <div className="text-container gap-14">
                {textStates.map((textState, index) => (
                    <h1
                        key={index}
                        className={`text-item ${textState.fadeIn ? 'fade-in-active' : ''}`}
                        style={{ transitionDelay: `${index * 0.5}s` }}
                    >
                        <div className='text-8xl font-semibold'>{textState.text}.</div>
                    </h1>
                ))}
            </div>
            {showAesthetix && (
                <h1 className="aesthetix-text">Aesthetix</h1>
            )}
        </div>
    );
}

export default LandingPage;
