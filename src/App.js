import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/logo192.png'
import AddToolForm from './components/AddToolForm.js';
import ToolItem from './components/ToolItem.js';
import EditTool from './components/EditToolForm.js';

function App() {

  const [tools, setTools] = useState(() => {
    const savedTools = localStorage.getItem("tools");
    if (savedTools) {
      console.log(savedTools)
      return JSON.parse(savedTools);
    } else {
      return [];
    }
  });

  const [tool, setTool] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTool, setCurrentTool] = useState({});

  useEffect(() => {
    localStorage.setItem("tools", JSON.stringify(tools));
  }, [tools]);

  function handleInputChange(e) {
    setTool(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTool({ ...currentTool, text: e.target.value });
    console.log(currentTool);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (tool !== "") {
      setTools([
        ...tools,
        {
          id: new Date(),
          text: tool.trim(),
          confirmed: false
        }
      ]);
    }

    setTool("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTool(currentTool.id, currentTool);
  }

  function handleDeleteClick(id) {
    const removeItem = tools.filter((tool) => {
      return tool.id !== id;
    });
    setTools(removeItem);
  }

  function handleUpdateTool(id, updatedTool) {

    const updatedItem = tools.map((tool) => {
      return tool.id === id ? updatedTool : tool;
    });
    setIsEditing(false);
    setTools(updatedItem);
    console.log(updatedTool);
  }

  function handleEditClick(tool) {
    setIsEditing(true);
    setCurrentTool({ ...tool });
  }

  function handleToggleConfirmed(tool) {
    const updatedItem = tools.map((item) =>
      item.id === tool.id ? { ...item, confirmed: !item.confirmed } : item
    );
    setTools(updatedItem);
  }

  return (
    <div className="App">
      <header>
        <img src={logo} height={50} width={50} alt="Hammer List logo" />
        <h1>Hammer List</h1>
      </header>

      {isEditing ? (
        <EditTool
          currentTool={currentTool}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddToolForm
          tool={tool}
          onInputChange={handleInputChange}
          onFormSubmit={handleFormSubmit}
        />
      )}

      <div className="listwrapper">
        {tools.map((tool) => (
          <ToolItem
            tool={tool}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
            onToggleConfirmed={handleToggleConfirmed}
          />
        ))}
      </div>
    </div>
  );
}

export default App;