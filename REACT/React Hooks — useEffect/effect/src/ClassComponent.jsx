import React from "react";

// class List extends React.Component {
//   state = {
//     numbers: [1, 2, 3],
//   };

//   addRandomNumber = () => {
//     const randNumber = Math.random(Math.random() * 10);
//     this.setState({
//       numbers: [...this.state.numbers, randNumber],
//     });
//   };

//   componentDidMount() {
//     console.log("Компонент был отображон ");
//   }

//   componentWillUnmount() {
//     console.log("Компонент будет удален");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("prevProps", prevProps);
//     console.log("prevState", prevState);
//     console.log("this props", this.props);
//     console.log("this state", this.state);
//   }

//   render() {
//     return (
//       <>
//         <ul>
//           {this.state.numbers.map((num, index) => (
//             <li key={index}>{num}</li>
//           ))}
//         </ul>
//         <button onClick={this.addRandomNumber}>+</button>
//       </>
//     );
//   }
// }

const List = () => {
  const [numbers, setNumbers] = React.useState([1, 555, 3]);
  const [count, setCount] = React.useState(0);

  const addNumber = () => {
    const randNumber = Math.random(Math.random() * 10);
    const newArr = [...numbers, randNumber];
    setNumbers(newArr);
  };

  React.useEffect(() => {
    console.log("КОМПОНЕНТ БЫЛ ОТОБРАЖОН");
    return () => {
      console.log("КОМПОНЕНТ БЫЛ УДАЛЕН");
    };
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>+</button>
    </>
  );
};

export default List;
