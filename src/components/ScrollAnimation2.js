import React from 'react';
import '../App.css'; // Import CSS for styling

const App = () => {
  return (
    <div className="container">
      <div className="image-section">
        {/* Add your image here */}
        {/* For example: */}
        <img src="meet.webp" alt="Image"   style={{ width: '400px', height: 'auto' }}/>
      </div>
      <main className="content">
        <section>
          <p>
            <span contentEditable={true}>
            We are one of the most experienced and leading provider of audio-visual automation solutions that seamlessly integrate audio, video, lighting, display equipment and system controls.
            </span>
          </p>
        </section>
      </main>
      
    </div>
  );
};

export default App;
