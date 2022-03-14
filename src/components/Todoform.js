import React from "react";
import styled from "styled-components";
// 사용할 컴포넌트를 정의하고 styled.태그명으로 작성한다.
const Todoaddinput = styled.input`
  border-radius: 5px;
  width: 500px;
  height: 60px;
  font-size: 2rem;
  position: relative;
  padding-left: 20px;
  margin-right: 20px;
`;

const TodoaddButton = styled.button`
  font-size: 2rem;
  border-radius: 5px;
  width: 100px;
  height: 60px;
  vertical-align: top;
  box-sizing: unset;
  cursor: pointer;
`;

function Todoform() {
  return (
    <form>
      <Todoaddinput type="text" placeholder="할 일을 적어주세요"></Todoaddinput>
      <TodoaddButton>추가</TodoaddButton>
    </form>
  );
}
export default Todoform;
