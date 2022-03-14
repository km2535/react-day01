import React from "react";
import styled from "styled-components";

const Todolist1N = styled.div`
  background-color: #80634c;
  margin-top: 10px;
  color: #foo;
`;
const Todolist2N = styled.div`
  background-color: #1aafbc;
  margin-top: 10px;
`;

// hook을 사용하기 위한 함수
function Todolist(props) {
  let stateInt;
  if (props.state.id % 2 === 0) {
    stateInt = true;
  } else {
    stateInt = false;
  }
  console.log(props.state);
  return (
    <>
      {stateInt ? (
        <Todolist1N>
          <div>
            <span>{props.state.id}</span>
            {props.state.Todo}
            <button>완료</button>
          </div>
        </Todolist1N>
      ) : (
        <Todolist2N>
          <div>
            <span>{props.state.id}</span>
            {props.state.Todo}
            <button>완료</button>
          </div>
        </Todolist2N>
      )}
    </>
  );
}

export default Todolist;
