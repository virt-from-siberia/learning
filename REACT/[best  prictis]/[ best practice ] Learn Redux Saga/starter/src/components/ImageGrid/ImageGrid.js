import React, { Component } from "react";
import { connect } from "react-redux";

import { loadImages } from "../../actions";
import Button from "../Button";
import Stats from "../Stats";

import "./styles.css";

const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images, error, isLoading, loadImages, stats } = this.props;

        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width
                            )}`}
                        >
                            <Stats stats={stats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>

                <Button
                    loading={isLoading}
                    onClick={() => !isLoading && loadImages()}
                >
                    Load images
                </Button>
                {error && <div className="error">{JSON.stringify(error)}</div>}
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error, stats }) => ({
    isLoading,
    images,
    error,
    stats
});

const mapDiapatchhToProps = dispatch => ({
    loadImages: () => dispatch(loadImages())
});

export default connect(mapStateToProps, mapDiapatchhToProps)(ImageGrid);
