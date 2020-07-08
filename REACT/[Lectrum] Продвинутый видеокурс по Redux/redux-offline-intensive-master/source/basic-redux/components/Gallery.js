// Core
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import cx from "classnames";

// Components
import { Button } from "./Button";

// Instruments
import Styles from "./styles.m.css";

//Store
import { store } from "../init/store";

//actions
import {
    showNextPhoto,
    showSelectedPhoto,
    showPreventPhoto,
} from "../bus/gallery/actions";

@hot(module)
export class Gallery extends Component {
    _showNextPhoto = () => {
        store.dispatch(showNextPhoto);
        this.forceUpdate();
    };
    _showPreventPhoto = () => {
        store.dispatch(showPreventPhoto);
        this.forceUpdate();
    };
    _showSelectedPhoto = (evt) => {
        store.dispatch(showSelectedPhoto(evt.target.value));
        this.forceUpdate();
    };

    render() {
        const {
            gallery: { photos, selectedPhotoIndex },
        } = store.getState();

        const photo = photos.find((_, index) => index === selectedPhotoIndex);

        const buttonActiveStyle1 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 0,
        });
        const buttonActiveStyle2 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 1,
        });
        const buttonActiveStyle3 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 2,
        });
        const buttonActiveStyle4 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 3,
        });

        return (
            <section className={Styles.gallery}>
                <img src={photo.url} />;
                <div>
                    <button onClick={this._showPreventPhoto}>←</button>
                    <button
                        className={Styles.buttonActive}
                        value='0'
                        onClick={this._showSelectedPhoto}
                    >
                        1
                    </button>
                    <button
                        className={Styles.buttonActive}
                        value='1'
                        onClick={this._showSelectedPhoto}
                    >
                        2
                    </button>
                    <button
                        className={Styles.buttonActive}
                        value='2'
                        onClick={this._showSelectedPhoto}
                    >
                        3
                    </button>
                    <button
                        className={Styles.buttonActive}
                        value='3'
                        onClick={this._showSelectedPhoto}
                    >
                        4
                    </button>
                    <button onClick={this._showNextPhoto}>→</button>
                </div>
            </section>
        );
    }
}
