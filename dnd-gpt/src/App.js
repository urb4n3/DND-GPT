import React from 'react';
import ChatWindow from './components/ChatWindow';
import CharacterBox from './components/CharacterBox';
import SceneDisplay from './components/SceneDisplay';
import TextInput from './components/TextInput';
import './App.css'; // Style your layout here

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        {/* Map CharacterBoxes here */}
      </div>
      <div className="main-content">
        <SceneDisplay />
        <ChatWindow />
        <TextInput />
      </div>
    </div>
  );
};

export default App;
