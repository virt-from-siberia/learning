import React, { Component } from "react";
import "./App.scss";
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/counter";

export const ClickedContext = React.createContext(false);

class App extends Component {
  // TODO: STATE

  constructor(props) {
    console.log("App constructor");
    super(props);

    this.state = {
      clicked: false,
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Audi", year: 2016 },
        { name: "Mazda", year: 2010 }
      ],
      pageTitle: "React components",
      showCars: false
    };
  }

  // state =

  /* //-- section: TITLE.========== */
  changeTitleHandler = newTitle => {
    this.setState({
      pageTitle: newTitle
    });
  };

  /* //-- section: LIST.========== */
  toggleHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };
  /* //-- section: CHANGE.========== */
  onChangeName(newName, index) {
    const car = this.state.cars[index];
    car.name = newName;
    const cars = [...this.state.cars];

    cars[index] = car;
    this.setState({
      cars: cars
    });
  }
  /* //-- section: INPUT.========== */
  handleInput = event => {
    let n = event.target.value;
    this.setState({
      pageTitle: n
    });
  };
  /* //-- section: DELITE========== */
  onDelite(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);

    this.setState({
      cars: cars
    });
  }

  componentWillMount() {
    console.log("App componentWillMount");
  }
  componentDidMount() {
    console.log("App componentDidMount");
  }

  // TODO: RENDER
  render() {
    console.log("App render");

    const divStyle = {
      textAlign: "center"
    };

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              index={index}
              onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
              onChangeName={event =>
                this.onChangeName(event.target.value, index)
              }
              onDelite={this.onDelite.bind(this, index)}
            />
          </ErrorBoundary>
        );
      });
    }

    // JSX: JSX
    return (
      <div style={divStyle}>
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>

        <h1>{this.props.title}</h1>
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handleInput} />

        {/* //-- section: TITLE.========== */}
        <button onClick={this.changeTitleHandler.bind(this, "Changed!")}>
          Change title
        </button>
        {/* // -- section_end: .TITLE========== */}

        {/* //-- section: LIST.========== */}
        <button onClick={this.toggleHandler}>Toggle Cars</button>
        {/* // -- section_end: .LIST========== */}

        <button onClick={() => this.setState({ clicked: true })}>
          change clicked
        </button>

        <div
          style={{
            width: 400,
            paddingTop: 20
          }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
