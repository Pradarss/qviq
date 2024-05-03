import React from 'react';
import { useParams } from 'react-router-dom';

function ScannedData() {
  const { data } = useParams();
  console.log(data);

  return (
    <div>
      <h2>Scanned Data</h2>
      <p>Data from QR Code: {data}</p>
    </div>
  );
}

export default ScannedData;
