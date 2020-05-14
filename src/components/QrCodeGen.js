import React, { useState } from 'react'
import { Box, TextField } from '@material-ui/core';
import QRCode from 'qrcode.react';
import './QrCodeGen.css'
import downloadIcon from '../assets/noun_Download_2176275.png'

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
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className="box"
            >
                <TextField
                    id="inputfield"
                    label="URL-Adresse"
                    placeholder={qrCodeValue}
                    variant="outlined"
                    onChange={event => setQrValue(event.target.value)}
                    style={{ width: 400 }}
                />
            </Box>
            <QRCode
                id="QrCode"
                value={qrCodeValue}
                size={290}
                level={"L"}
                includeMargin={false}
            />
            <a onClick={downloadQR} href=" " className="link">
                <img src={downloadIcon} alt="download icon" width="20px" height="20px" />
                &nbsp;Download QR-Code
            </a>
        </div>
    )
}
