function List(props){
    
    const listItems=props.Items.map(Item=>{
       return <li key={Item.id}><a href="#">
                {Item.name}</a>{"  "}
                {Item.calories}
              </li>
    });

    return(
    <>  
        <ol className="listItems">{listItems}</ol>
    </>
    );
}

export default List;