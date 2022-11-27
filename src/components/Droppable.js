import { useDroppable } from '@dnd-kit/core';

function Droppable({ children, ...props }) {
  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  return (
    <div ref={setNodeRef} {...props}>
      {children}
    </div>
  );
}

export default Droppable;
