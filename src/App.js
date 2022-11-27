import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useState } from 'react';
import './App.css';

import Draggable from './components/Draggable';
import Droppable from './components/Droppable';
import Item from './components/Item';

function App() {
  const items = ['🍎', '🍌', '🍊'];

  const [activeId, setActiveId] = useState(null);
  const [droppedItems, setDroppedItems] = useState([]);

  return (
    <div className="container">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>

        <div className="drag zone">
          {items.map((item, index) => (
            <Draggable key={index} id={index}>
              <Item>{item}</Item>
            </Draggable>
          ))}
        </div>

        <Droppable>
          {droppedItems.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Droppable>

        <DragOverlay dropAnimation={null}>
          {activeId !== null ? (
            <Item>{items[activeId]}</Item>
          ) : null}
        </DragOverlay>

      </DndContext>
    </div>
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (over && over.id === 'droppable') {
      // Append to the list of dropped items
      const newItem = items[active.id];
      setDroppedItems([...droppedItems, newItem]);
    }
  }
}

export default App;
