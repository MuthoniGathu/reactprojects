import React from "react";

const Practice = () => {
  return (
    <div>
      {/* const [count, setCount] = useState(0);

  function increment() {
      setCount(prevCount => prevCount + 1);
    }

    function decrement() {
      setCount(prevCount => prevCount - 1);
    }

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>
          Change!
        </button> */}
      {/* </div>
    );
  } */}
      {/* // const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  // const [contactsData, setContactsData] = useState([]); */}

      {/* // function handleChange(event) {
  //   // update our inputData state
  //   const { name, value } = event.target;
  //   setInputData(prevInputData => {
  //     return {
  //       ...prevInputData,
  //       [name]: value
  //     };
  //   });
    // or
    // setInputData(prevInputData => ({...prevInputData, [name]: value}))
  // } */}

      {/* // function handleSubmit(event) {
  //   // add the inputData to the contactsData array
  //   event.preventDefault();
  //   setContactsData(prevContacts => [...prevContacts, inputData]);
  // } */}
      {/* 
  // return (
  //   <>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         placeholder="First Name"
  //         name="firstName"
  //         value={inputData.firstName}
  //         onChange={handleChange}
  //       />
  //       <input
  //         placeholder="Last Name"
  //         name="lastName"
  //         value={inputData.lastName}
  //         onChange={handleChange}
  //       />
  //       <br />
  //       <button>Add contact</button>
  //     </form>
  //     {/*{contacts}*/}
      {/* //   </>
  // ); */}
      {/* const [newTodoValue, setNewTodoValue] = useState("")
    const [todosList, setTodosList] = useState([])
    
    function handleChange(event) {
        setNewTodoValue(event.target.value)
    }
    
    function addTodo(event) {
        event.preventDefault()
        setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
        setNewTodoValue("")
    }
    
    const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>)
    
    return (
        <div>
            <form>
                <input type="text" name="todo" value={newTodoValue} onChange={handleChange}/>
                <button onClick={addTodo}>Add todo item</button>
            </form>
            {allTodos}
        </div>
    ) */}
    </div>
  );
};

export default Practice;
