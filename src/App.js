import React from 'react';
import { QrCodeGen } from './components/QrCodeGen';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="center"> QR-Code Generator</h1>
      <QrCodeGen />
    </div>
  );
}

export default App;
