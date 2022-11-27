import { forwardRef } from "react";

const Item = forwardRef(({ children, ...props }, ref) => {
  props.className = props.className ? props.className + " item" : "item";

  return (
    <div ref={ref}>
      <div {...props}>
        {children}
      </div>
    </div>
  );
});

export default Item;
