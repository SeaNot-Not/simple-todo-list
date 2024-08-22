import { useState } from "react"

export function NewTodoForm({addTodoItem}) {
    const [newItem, setNewItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(newItem === "") {
          alert("Please input a string!")
        } else {
          addTodoItem(newItem)
          setNewItem("")
        } 
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input className="text-input" value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn btn-add">Add</button>
      </form>
    )
}