import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-intro">Здесь будут мои самые залайканые фото</p>
        <p>Меня зовут : {this.props.user}</p>
      </div>
    )
  }
}

// приклеиваем данные из store'
const mapStateToProps = store => {
  console.log(store) // посмотрим, что же у нас в store?
  return {
    user: store.user,
  }
}

export default connect(mapStateToProps)(App)
