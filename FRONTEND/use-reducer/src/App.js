import { useState, useEffect, useRef, useReducer } from "react";

import logo from "./logo.svg";
import menu from "./menu.svg";
import magnifier from "./magnifier.svg";
import "./styles.css";

const initialState = {
  records: [],
  currentSearch: ""
};

  // const handleClearRecord = (e) => {
  //   setRecords([]);
  // };
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return {
        ...state,
        currentSearch: action.payload
      };
    case "UPDATE_RECORDS":
      return {
        ...state,
        records: [...state.records, state.currentSearch],
        currentSearch: ""
      };
    case "REMOVE_LAST":
      return {
        ...state,
        records: state.records.filter((el, i) => i !== state.records.length - 1)        
      };    
    case "CLEAR_RECORD":
      return {
        ...state,
        records: [],        
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // let [records, setRecords] = useState([]);
  // let [currentSearch, setCurrentSearch] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // const handleChange = (e) => {
  //   setCurrentSearch(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (currentSearch === "") {
  //     alert("Digite uma pesquisa");
  //   } else {
  //     setRecords((old) => [...old, currentSearch]);
  //     setCurrentSearch("");
  //   }
  // };

/*   const handleRemoveLast = (e) => {
   setRecords((records) =>
      records.filter((el, i) => i !== records.length - 1)
    );
   }; */



  return (
    <>
      <header>
        <div className="icon-wrapper">
          <img src={menu} className="menu" alt="menu" />
          <img src={logo} className="logo" alt="logo" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: "UPDATE_RECORDS"
            });
          }}
        >
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Buscar"
            autoComplete="off"
            ref={inputRef}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SEARCH",
                payload: e.target.value
              })
            }
            value={state.currentSearch}
          />
          <button type="submit">
            <img src={magnifier} alt="search" />
          </button>
        </form>
        <div className="avatar"></div>
      </header>
      <main>
        <h1>Histórico de Busca</h1>
        <ul>
          {state.records.length === 0 ? (
            <h3>Lista vazia</h3>
          ) : (
            state.records.map((el, i) => <li key={i}>{el}</li>)
          )}
        </ul>
        <div className="buttons">
          <button
           onClick={() => {            
            dispatch({
              type: "REMOVE_LAST"
            });
          }}
          // onClick={handleRemoveLast}
          >
            Excluir última
          </button>
          <button
          onClick={() => {            
            dispatch({
              type: "CLEAR_RECORD"
            });
          }}
          // onClick={handleClearRecord}
          >
            Limpar lista
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
