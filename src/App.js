import "./App.css"
import { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

const TodoItemInputField = (props) => {
  const [input, setInput] = useState("")

  console.log(input)
  return (
    <div>
      <TextField
        id="todo-item -input"
        label="Todo Item"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Button variant="outlined">Submit</Button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <TodoItemInputField />
    </div>
  )
}

export default App
