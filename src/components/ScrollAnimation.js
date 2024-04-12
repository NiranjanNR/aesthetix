import React from 'react';
import '../App.css'; // Import CSS for styling

const App = () => {
  return (
    <div className="container">
      <main className="content">
        <section>
          <p>
            <span contentEditable={true}>
              Vishaal is the King 
              Vishaal is the King
              Vishaal is the King
              Vishaal is the King
              Vishaal is the King
            </span>
          </p>
        </section>
      </main>
      <div className="image-section">
        {/* Add your image here */}
        {/* For example: */}
        <img src="king.jpeg" alt="Image" />
      </div>
    </div>
  );
};

export default App;
