import React, { Fragment, useState, useRef, useEffect } from "react"; //siempre hay que importar React es para usar jsx
import { json } from "react-router-dom";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

//Styles
import { GlobalStyle } from "./GlobalStyle";

// import { v4 as uuidv4 } from "uuid";
// import { TodoList } from "./TodoList";

// const KEY = "todoApp.todos";

// const App = () => {
//   // return <div className="App">Start here.</div>;
//   const [todos, setTodos] = useState([
//     { id: 1, task: "Tarea 1", completed: false },
//   ]);

//   const todoTaskRef = useRef();

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem(KEY));
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(KEY, JSON.stringify(todos));
//   }, [todos]);

//   const toggleTodo = (id) => {
//     const newTodos = [...todos];
//     const todo = newTodos.find((todo) => todo.id === id);
//     todo.completed = !todo.completed;
//     setTodos(newTodos);
//   };

//   const handleTodoAdd = () => {
//     const task = todoTaskRef.current.value;
//     if (task === "") return;

//     setTodos((prevTodos) => {
//       return [...prevTodos, { id: uuidv4(), task, completed: false }];
//     });

//     todoTaskRef.current.value = null;
//   };

//   const handleClearAll = () => {
//     const newTodos = todos.filter((todo) => !todo.completed);
//     setTodos(newTodos);
//   };

//   return (
//     <Fragment>
//       <TodoList todos={todos} toggleTodo={toggleTodo} />
//       <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
//       <button onClick={handleTodoAdd}>➕</button>
//       <button onClick={handleClearAll}>🗑</button>
//       <div>
//         Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
//         terminar
//       </div>
//     </Fragment>
//   );
// };

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
