import React from 'react';
import { QrCodeGen } from './components/QrCodeGen';
import './App.css';

function App() {
  return (
    <div>
      <div className="center">
        <h1> QR-Code Generator</h1>
      </div>
      <QrCodeGen />
    </div>
  );
}

export default App;
