import React from 'react';       
import MyComponent from './mycomponent';


function App() {
  return (
    <div style={{
      backgroundColor: '#3498db',  
      height: '100vh',  
      display: 'flex',  
      justifyContent: 'center',  
      alignItems: 'center',  
      textAlign: 'center',  
      color: 'white',  
      flexDirection: 'column', 
    }}>
      <h1>Welcome to My First React App!</h1>
      <p>This is a simple React application I built using Create React App.</p>
      <MyComponent />
    </div>
  );
}

export default App;
