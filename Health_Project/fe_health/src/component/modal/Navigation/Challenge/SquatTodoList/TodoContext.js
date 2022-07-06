import React, { useReducer, createContext, useContext, useRef } from "react"

const initialTodos = [
  {
    id: 1,
    text: "스쿼트 연속 40개",
    done: true,
  },
  {
    id: 2,
    text: "스쿼트 연속 60개",
    done: true,
  },
  {
    id: 3,
    text: "스쿼트 연속 80개",
    done: false,
  },
  {
    id: 4,
    text: "스쿼트 연속 100개",
    done: false,
  },
]

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo)
    case "SUCCESS":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, success: !todo.success } : todo
      )
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()
const TodoNextIdContext = createContext()

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)
  const nextId = useRef(5)

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export function useTodoState() {
  const context = useContext(TodoStateContext)
  if (!context) {
    throw new Error("Cannot find TodoProvider")
  }
  return context
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext)
  if (!context) {
    throw new Error("Cannot find TodoProvider")
  }
  return context
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext)
  if (!context) {
    throw new Error("Cannot find TodoProvider")
  }
  return context
}
