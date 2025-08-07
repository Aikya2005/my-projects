import List from "./List";

function App(){
  const fruits=[
        { id:1, name:"Apple", calories:200},
        {id:2, name:"Banana", calories:150},
        {id:3, name:"Grapes", calories:250},
  ];

  const vegetables=[
        { id:1, name:"Potato", calories:100},
        {id:2, name:"Carrot", calories:150},
        {id:3, name:"Tomato", calories:60},
  ];
  return(
    <>
      <List Items={fruits}/>
      <List Items={vegetables}/>
    </>
  );
}

export default App;