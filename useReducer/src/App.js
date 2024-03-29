import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.NEW_USER_INPUT:
      return { ...state, userInput: action.payload };
    case ACTION.TG_COLOR:
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  NEW_USER_INPUT: "newUserInput",
  TG_COLOR: "tgColor",
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  return (
    <div>
      <main style={{ color: state.color ? "#FFF" : "gold" }}>
        <input
          type="text"
          placeholder="Random Input"
          value={state.userInput}
          onChange={(e) =>
            dispatch({ type: "newUserInput", payload: e.target.value })
          }
        />

        <br />
        <br />
        <p>{state.count}</p>
        <section>
          <button onClick={(e) => dispatch({ type: ACTION.DECREMENT })}>
            -
          </button>
          <button onClick={(e) => dispatch({ type: ACTION.INCREMENT })}>
            +
          </button>
          <button onClick={(e) => dispatch({ type: ACTION.TG_COLOR })}>
            Color
          </button>
        </section>
        <br />
        <br />
        <p> {state.userInput}</p>
      </main>
    </div>
  );
}

export default App;
