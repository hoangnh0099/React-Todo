import React, { Component } from 'react';
import './App.css';
import firebase from './FirebaseConfig';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newNote: "",
      TodoList: []
    }
  }

  onChange = (event) => {
    this.setState({
      newNote: event.target.value
    })

  }

  onSubmit = (event) => {
    event.preventDefault();
    const database = firebase.firestore();
    database.collection("TodoList").add({
      content: this.state.newNote
    })
    this.setState({
      newNote: ""
    })
  }

  onDelete = (id) => {
    return () => {
      const database = firebase.firestore();
      database.collection("TodoList").doc(id).delete();
    }
  }

  componentDidMount() {
    const database = firebase.firestore();
    database.collection("TodoList").onSnapshot(snapshot => {
      const TodoList = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      console.log(TodoList)
      this.setState({ TodoList: TodoList })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo App</h1>
        </div>

        <div className="content">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="What do you want to note ?"
              value={this.state.newNote}
              onChange={this.onChange}
              />
          </form>

          <ul>
          {
            this.state.TodoList.map((note, index) => {
              return (
                <li key={index} onClick={this.onDelete(note.id)}>{note.content}</li>
              );
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
