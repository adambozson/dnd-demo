import { forwardRef } from "react";

const Item = forwardRef(({ children, ...props }, ref) => {
  props.className = props.className ? props.className + " item" : "item";
  
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

export default Item;
