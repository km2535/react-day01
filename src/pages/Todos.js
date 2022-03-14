import React from "react";
import Todoform from "../components/Todoform";
import Todolist from "../components/Todolist";
import Todotitle from "../components/Todotile";

// hook을 사용하기 위한 함수
function Todos() {
  // props -property의 약자로 부모에게 받아온 데이터
  //상위 컴포넌트에서 하위 컴포넌트로 데이터(변수, 함수)를 보낼 때 혹은 받을 때 사용

  let state = [
    { id: 1, Todo: "리엑트 공부하기" },
    { id: 2, Todo: "리엑트 또 공부하기" },
  ];

  return (
    <>
      <Todotitle count={state.length} />
      <Todoform />
      {/* 컴포넌트를 반복문을 이용하여 Tosdolist value만큼 반복시킨다. */}
      {state.map((v) => (
        <Todolist key={v.id} state={v} />
      ))}
    </>
  );
}

export default Todos;
