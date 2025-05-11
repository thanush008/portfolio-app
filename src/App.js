import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className={`min-h-screen p-6 space-y-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
        
        {/* Dark Mode Toggle */}
        <div className="flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-sm font-medium"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-2">Thanusan Sutharsan</h1>
          <p className="text-xl">Data Scientist | AI & ML Web App Developer</p>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl shadow bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">AI Chatbot</h3>
              <p>A chatbot with memory and mood-based responses using NLP models.</p>
              <a href="#" className="text-blue-400 dark:text-blue-300">View Project</a>
            </div>
            <div className="p-4 rounded-2xl shadow bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Human Activity Classifier</h3>
              <p>Time-series ML model for classifying physical activity using accelerometer data.</p>
              <a href="#" className="text-blue-400 dark:text-blue-300">View Project</a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <li>Python</li>
            <li>React</li>
            <li>scikit-learn</li>
            <li>TensorFlow</li>
            <li>PostgreSQL</li>
            <li>FastAPI</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: <a href="mailto:sthanusan@myyahoo.com" className="text-blue-400 dark:text-blue-300">sthanusan@myyahoo.com</a></p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://github.com/thanush008" className="text-blue-400 dark:text-blue-300">GitHub</a>
            <a href="https://www.linkedin.com/in/thanusan-sutharsan-datascience/" className="text-blue-400 dark:text-blue-300">LinkedIn</a>
            <a href="https://www.kaggle.com/sutharsanthanusan" className="text-blue-400 dark:text-blue-300">Kaggle</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
