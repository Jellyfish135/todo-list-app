import "./App.css"
import { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

const TodoItemInputField = (props) => {
  const [input, setInput] = useState("")

  const onSubmit = () => {
    props.onSubmit(input)
    setInput("")
  }

  //console.log(input)
  return (
    <div>
      <TextField
        id="todo-item -input"
        label="Todo Item"
        variant="outlined"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />

      <Button variant="outlined" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  )
}

const TodoItemList = (props) => {
  return <div></div>
}
function App() {
  return (
    <div className="App">
      <TodoItemInputField
        onSubmit={(input) => {
          console.log(input)
        }}
      />
      <TodoItemList />
    </div>
  )
}

export default App
