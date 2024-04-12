import React, { useState, useEffect } from 'react';
import '../index.css';
import Navbar from './navbar';

function LandingPage() {
    const [textStates, setTextStates] = useState([
        { text: 'Innovate', fadeIn: false },
        { text: 'Enable', fadeIn: false },
        { text: 'Sustain', fadeIn: false }
    ]);
    const [fadeOut, setFadeOut] = useState(false);
    const [showAesthetix, setShowAesthetix] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [showNavbar, setShowNavbar] = useState(false); // State for Navbar visibility

    const fadeInTexts = () => {
        setTextStates(prevStates => {
            return prevStates.map((state, index) => {
                return { ...state, fadeIn: true };
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

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setShowNavbar(true); // Show Navbar when scrolling down

                const aesthetixTexts = document.querySelectorAll('.aesthetix-text');
                aesthetixTexts.forEach((text) => {
                    text.style.fontSize = '61px'; // Set the desired font size
                    text.style.position = 'fixed'; // Position fixed to top left
                    text.style.left = '133px';
                    text.style.top = '40px';
                });
                // Select the element with the class 'navbar'
                // Select the element with the class 'navbar'
                const navbar = document.querySelector('.navbar');

                // Check if the element is found
                if (navbar) {
                    // Set initial opacity (if needed)
                    navbar.style.opacity = 0; // Start from 0 for a fade-in effect

                    // Define the number of frames and the duration
                    const duration = 10000; // Duration of the animation in milliseconds
                    const frames = duration / 16; // Assuming 60 frames per second (1000ms / 16ms)

                    // Calculate the increment value to reach the final opacity
                    const targetOpacity = 1;
                    const increment = (targetOpacity - parseFloat(navbar.style.opacity)) / frames;

                    // Function to animate opacity using requestAnimationFrame
                    function animateOpacity(timestamp) {
                        const currentOpacity = parseFloat(navbar.style.opacity);
                        const newOpacity = currentOpacity + increment;

                        if (newOpacity <= targetOpacity) {
                            navbar.style.opacity = newOpacity;
                            requestAnimationFrame(animateOpacity);
                        } else {
                            navbar.style.opacity = targetOpacity; // Ensure final opacity is exactly 1
                        }
                    }
                    
                    // Start the animation
                    requestAnimationFrame(animateOpacity);
                }



            } else {
                // Scrolling up
                // setShowNavbar(false); // Hide Navbar when scrolling up
            }
            setLastScrollTop(currentScrollTop);
            setScrollPosition(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);
    return (
        <div className="app-container overflow-y-auto flex justify-center items-center">
            <div className="navbar-container" style={{ visibility: showNavbar ? 'visible' : 'hidden' }}>
                <Navbar />
            </div>
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
