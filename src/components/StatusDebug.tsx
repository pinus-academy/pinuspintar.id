// components/StatusDebug.tsx
'use client';

import { useSession } from 'next-auth/react';

export default function StatusDebug() {
  const { data: session, status } = useSession();

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      padding: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      border: '2px solid yellow',
      zIndex: 9999,
      fontFamily: 'monospace',
      fontSize: '14px',
    }}>
      <h3 style={{ margin: '0 0 5px 0', color: 'yellow' }}>STATUS DEBUG SESI</h3>
      <p style={{ margin: 0 }}>Status: <strong>{status}</strong></p>
      {status === 'authenticated' ? (
        <p style={{ margin: '5px 0 0 0' }}>Login sebagai: <strong style={{color: '#00ff00'}}>{session.user?.name || 'User Tanpa Nama'}</strong></p>
      ) : (
        <p style={{ margin: '5px 0 0 0', color: '#ff4d4d' }}>Anda Belum Login</p>
      )}
    </div>
  );
}