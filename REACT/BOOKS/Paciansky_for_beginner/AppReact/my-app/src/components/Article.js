import React from "react";
import PropTypes from "prop-types";

// section: Article ===========================
class Article extends React.Component {
  //TODO: STATIC
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      bigText: PropTypes.string.isRequired
    })
  };
  // TODO: STATE
  state = {
    visible: false
  };

  // NOTE:  handlerReadMoreClick
  handlerReadMoreClick = evt => {
    evt.preventDefault();
    this.setState({ visible: true });
  };

  render() {
    const { author, text, bigText } = this.props.data;
    const { visible } = this.state;
    console.log("render", this);

    // JSX:
    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        {!visible && (
          <a
            href="#"
            className="news__readmore"
            onClick={this.handlerReadMoreClick}
          >
            Подробнее
          </a>
        )}
        {visible && <p className="news__big-text">{bigText}</p>}
      </div>
    );
  }
}

export { Article };
