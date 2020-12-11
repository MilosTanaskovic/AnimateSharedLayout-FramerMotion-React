import React from 'react'
import './App.css';
// import components
import Layout from './Components/Layout';
import Footer from './Components/Footer';
/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */
function App() {
  return (
    <div className="App">
      <h1>React Dancing</h1>
      <Layout/>
      <Footer/>
    </div>
  );
}

export default App;
