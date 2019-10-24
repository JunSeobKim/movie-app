import React from "react";

function Food({ favorite }) {
  return <h1>I like {favorite}</h1>;
}

function App() {
  return (
    <div>
      <h1>안녕하세요</h1>
      <Food favorite="김치"></Food>
      <Food favorite="라면"></Food>
    </div>
  );
}

export default App;
