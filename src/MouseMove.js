import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 900px;
  height: 900px;
  background-color: red;
  position: relative;
`;
export const MouseMove = () => {
  const [xy, setXy] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setXy({ x: e.clientX, y: e.clientY });
    console.log(e.clientX);
  };

  return (
    <Wrap
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
      <div style={{ position: "absolute", left: xy.x, top: xy.y }}>Nike</div>
    </Wrap>
  );
};
