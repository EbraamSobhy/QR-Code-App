import "./Components/QR.css";
import QRcode from './Components/QRcode';
import Footer from './Components/Footer';
import Link from './Components/Link';
import React from "react";

function App() {
  return (
    <div className="App">
      <Footer />
      <QRcode />
      <Link />
    </div>
  );
}

export default App;
