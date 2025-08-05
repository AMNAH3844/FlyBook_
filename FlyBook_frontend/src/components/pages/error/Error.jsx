import React from 'react';

function Error() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f8d7da', 
      color: '#2e6f83ff', 
      fontSize: '1.5rem', 
      textAlign: 'center', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
    }}>
      <p>The page you found does not exist.</p>
    </div>
  );
}

export default Error;
