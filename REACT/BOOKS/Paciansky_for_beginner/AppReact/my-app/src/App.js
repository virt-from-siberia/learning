import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import { Article } from "./components/Article";
import myNews from "./data/newsData.json";

// section: News ===========================
class News extends React.Component {
  //TODO: STATIC
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  // TODO: STATE
  state = {
    counter: 0
  };

  // NOTE: renderNwes====
  renderNwes = () => {
    const { data } = this.props;
    let newsTemplate = null;

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Article key={item.id} data={item} />;
      });
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>;
    }

    return newsTemplate;
  };
  // JSX:
  render() {
    const { data } = this.props;

    return (
      <div className="news">
        {this.renderNwes()}
        {data.length ? (
          <strong className={"news__count"} onClick={this.handleCounter}>
            Всего новостей: {data.length}{" "}
          </strong>
        ) : null}
      </div>
    );
  }
}

// section: ADD ===========================
class Add extends React.Component {
  //TODO: STATIC
  static propTypes = {
    onAddNews: PropTypes.func.isRequired
  };

  state = {
    nameValue: "",
    newsValue: "",
    isChecked: false,
    bigText: ""
  };

  onBtnClickHandler = evt => {
    // эта запись сейчас не работает
    evt.preventDefault();
    const { nameValue, newsValue, bigText } = this.state;
    const id = +new Date();
    this.props.onAddNews({
      author: nameValue,
      text: newsValue,
      id: id,
      bigText: bigText
    });
  };

  handleChange = evt => {
    const { id, value } = evt.target;
    this.setState({
      [id]: evt.target.value
    });
  };
  newsChange = evt => {
    this.setState({
      newsValue: evt.target.value
    });
  };
  changeChackBox = evt => {
    this.setState({
      isChecked: true
    });
  };

  validate = () => {
    const { newsValue, nameValue, isChecked } = this.state;

    if (nameValue.trim() && newsValue.trim() && isChecked) {
      return true;
    }
    return false;
  };

  render() {
    const { nameValue, newsValue, bigText } = this.state;
    // JSX:
    return (
      <React.Fragment>
        <form className="add">
          <input
            id="nameValue"
            type="text"
            className="add__author"
            placeholder="Ваше имя"
            onChange={this.handleChange}
            value={nameValue}
          />
          <textarea
            id="newsValue"
            className="add__text"
            placeholder="Текст новости"
            value={newsValue}
            onChange={this.handleChange}
          ></textarea>
          <textarea
            id="bigText"
            className="add__text"
            placeholder="Большие новости"
            value={bigText}
            onChange={this.handleChange}
          ></textarea>
          <label className="add__checkrule">
            <input type="checkbox" onChange={this.changeChackBox} /> Я согласен
            с правилами
          </label>
          <button
            className="add__btn"
            onClick={this.onBtnClickHandler}
            disabled={!this.validate()}
          >
            Добавить новость
          </button>
        </form>
      </React.Fragment>
    );
  }
}

// section: APP===========================
class App extends React.Component {
  // HACK:componentDidMount()
  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      fetch("http://localhost:3000/data/newsData.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(this);
          console.log("приехали данные ", data);
          this.setState({
            news: [...data],
            isLoading: false
          });
        });
    }, 2000);
  }

  // TODO: STATE
  state = {
    news: null, // в начальное состояние положили значение из переменной
    isLoading: false
  };
  handleAddNews = data => {
    const nextNews = [data, ...this.state.news];
    console.log(nextNews);
    this.setState({
      news: nextNews
    });
  };

  render() {
    const { news, isLoading } = this.state;
    const Load = () => {
      return (
        <div>
          <p>Загружаю...</p>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    };

    // JSX:
    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        {isLoading && <Load />}
        {Array.isArray(news) && <News data={news} />}
      </React.Fragment>
    );
  }
}

export default App;
