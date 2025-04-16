import React from "react";

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>🌍 eKlimat – system opłat miejscowych</h1>
      <p>Witamy w systemie eKlimat! Wybierz swoją rolę:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
        <button style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Inkasent</button>
        <button style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Urzędnik</button>
        <button style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Partner</button>
      </div>
    </div>
  );
}
