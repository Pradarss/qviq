import React from "react";
import QRCode from "react-qr-code";
import { useLocation } from 'react-router-dom';

function Dashboard(){
    const location = useLocation();
    const qrCodeData = location.state.userData.user.name;
    const scannedUrl = `http://localhost:3000/scanned/${qrCodeData}`;

    return (
        <div>
            <QRCode value={scannedUrl} />
            <p><a href={scannedUrl} target="_blank" rel="noopener noreferrer">{scannedUrl}</a></p>
        </div>
    );
}

export default Dashboard;
