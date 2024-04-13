import React from 'react';
import '../App.css'; // Import CSS for styling

const App = () => {
  return (
    <div className="container">
      <main className="content">
        <section>
          <p>
            <span contentEditable={true}>
            At Aesthetix Technologies, 
            we are re imagining communication and collaboration to design work and living spaces of the 21st century. 
            </span>
          </p>
        </section>
      </main>
      <div className="image-section">
        {/* Add your image here */}
        {/* For example: */}
        <img src="aesthetix.jpeg" alt="Image" />
      </div>
    </div>
  );
};

export default App;
