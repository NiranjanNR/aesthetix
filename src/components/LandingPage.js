import React, { useState, useEffect } from 'react';
import '../index.css';
import Narration from './ScrollAnimation'
import Leading from './Leading';


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
    const [already, setAlready] = useState(true);
    const [already2, setAlready2] = useState(true);

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

                const leading = document.querySelector('.leading');

                // Check if the element is found
                if (navbar && already) {
                    setAlready(false);
                    // Set initial opacity (if needed)
                    navbar.style.opacity = 0; // Start from 0 for a fade-in effect

                    // Define the number of frames and the duration
                    const duration = 1000; // Duration of the animation in milliseconds
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

                if (leading && already2) {
                    setAlready2(false);
                    console.log(1);
                    // Set initial opacity (if needed)
                    leading.style.opacity = 0; // Start from 0 for a fade-in effect

                    // Define the number of frames and the duration
                    const duration = 1000; // Duration of the animation in milliseconds
                    const frames = duration / 16; // Assuming 60 frames per second (1000ms / 16ms)

                    // Calculate the increment value to reach the final opacity
                    const targetOpacity = 1;
                    const increment = (targetOpacity - parseFloat(leading.style.opacity)) / frames;

                    // Function to animate opacity using requestAnimationFrame
                    function animateOpacity(timestamp) {
                        const currentOpacity = parseFloat(leading.style.opacity);
                        const newOpacity = currentOpacity + increment;

                        if (newOpacity <= targetOpacity) {
                            leading.style.opacity = newOpacity;
                            requestAnimationFrame(animateOpacity);
                        } else {
                            leading.style.opacity = targetOpacity; // Ensure final opacity is exactly 1
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
        <div>
            <div className="app-container overflow-y-auto flex justify-center items-center">
                <div className="navbar-container" style={{ visibility: showNavbar ? 'visible' : 'hidden' }}>
                    <div className='navbar text-black md:mx-3'>
                        <div className='py-4 flex justify-center items-center h-[7vh]'>
                            <div className='hidden md:flex font-semibold text-md'>
                                <div>
                                    <button className='hover:text-[#66146a] px-5 transition-all ease-in-out active:scale-95 hover-underline-animation'>About us</button>
                                </div>
                                <div>
                                    <button className='hover:text-[#66146a] px-5 transition-all ease-in-out active:scale-95 hover-underline-animation'>Discover</button>
                                </div>
                                <button className='hover:text-[#66146a] px-5 transition-all ease-in-out active:scale-95 hover-underline-animation'>Support</button>
                                <button className='hover:text-[#66146a] px-5 transition-all ease-in-out active:scale-95 hover-underline-animation'>Blog</button>
                            </div>
                            <div className='md:hidden'>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    already ?
                        <div className="text-container gap-14" >
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
                        :
                        <div className='leading'>
                            <div className='gradient-text h-[100vh] text-[120px] font-bold text-center flex justify-center items-center'>
                                <div className='mb-10'>
                                    <div className=''>Leaders in Smart</div>
                                    <div className='mt-[-40px]'>Technology Solutions</div>
                                </div>
                            </div>
                        </div>
                }


                {showAesthetix && (
                    <h3 className="aesthetix-text">Aesthetix</h3>
                )}
            </div>
            <Narration />
        </div>

    );
}
export default LandingPage;
