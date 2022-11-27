import { useDroppable } from '@dnd-kit/core';

function Droppable({ children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const className = isOver ? 'drop zone active' : 'drop zone';

  return (
    <div className={className} ref={setNodeRef}>
      {children}
    </div>
  );
}

export default Droppable;
