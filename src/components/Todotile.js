import React from "react";

// hook을 사용하기 위한 함수
function Todotitle(count) {
  console.log(count.count);
  return (
    <div className="navbar">
      할일 목록 리스트 <sapn>{count.count}</sapn>개
    </div>
  );
}

export default Todotitle;
