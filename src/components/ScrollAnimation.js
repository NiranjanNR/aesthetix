import React from 'react';
import '../App.css'; // Import CSS for styling
import { Parallax } from 'react-scroll-parallax';

const App = () => {
  return (
    <div>
      <div className='h-[170px]'>
        <Parallax scale={[1, 1.45]} translateY={['-120px', '200px']} opacity={[0.5, 5]}>
          <div className="flex px-4 justify-center items-center">
            <div className='text-[140px] tracking-wider text-[#4343437d] font-extrabold tracking-tight	'>ABOUT US</div>
          </div>
        </Parallax>
      </div>
      <div className="container flex justify-center">
        <main className="content">
          <section>
            <p>
              <div className='text-6xl font-bold mb-6'>Who Are We?</div>
              <span className='w-[100px]' contentEditable={true}>
                Vishaal is a naayinde mwon. Bro cant even pose properly, As seen in the demo photo. But lets be respectful.
              </span>
            </p>
          </section>
        </main>
        <div className="image-section">
          <img src="king.jpeg" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default App;
