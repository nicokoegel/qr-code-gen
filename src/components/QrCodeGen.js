import React, { useState } from 'react'
import TextField from '';
import QRCode from 'qrcode.react';
import './QrCodeGen.css'

export const QrCodeGen = () => {
    const [qrCodeValue, setQrValue] = useState('nicokoegel.github.io/qr-code-gen');
    const downloadQR = () => {
        const canvas = document.getElementById("QrCode");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${qrCodeValue}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div>
            <input type="text" onChange={event => setQrValue(event.target.value)} placeholder={qrCodeValue}></input>
            <QRCode
                id="QrCode"
                value={qrCodeValue}
                size={290}
                level={"L"}
                includeMargin={true}
            />
            <a onClick={downloadQR} className="link"> Download QR </a>
            <TextField
                id="outlined-required"
                label="URL-Adresse"
                defaultValue="Hello World"
                variant="outlined"
            />
        </div>
    )
}
