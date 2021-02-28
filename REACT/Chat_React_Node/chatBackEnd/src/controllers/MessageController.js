import express from "express";
import { MessageModel, DialogModel } from "../models";
import socket from "socket.io";

class MessageController {
    io;
    constructor(io) {
        this.io = io;
    }

    index = (req, res) => {
        const dialogId = req.query.dialog;

        MessageModel.find({ dialog: dialogId })
            .populate(["dialog"])
            .exec(function (err, messages) {
                if (err) {
                    return res.status(404).json({
                        message: "Messages not found",
                    });
                }
                return res.json(messages);
            });
    };

    create = (req, res) => {
        // const userId = "5ea03c6928d2683954b868ec";
        const userId = req.user._id;

        const postData = {
            text: req.body.text,
            dialog: req.body.dialog_id,
            user: userId,
        };

        const message = new MessageModel(postData);

        message
            .save()
            .then((obj) => {
                obj.populate("dialog", (err, message) => {
                    if (err) {
                        return res.status(500).json({
                            status: "error",
                            message: err,
                        });
                    }

                    DialogModel.update({ _id: postData.dialog });

                    DialogModel.findByIdAndUpdate(
                        { _id: postData.dialog },
                        { lastMessage: message._id },
                        { upsert: true },
                        function (err) {
                            if (err) {
                                return res.status(500).json({
                                    status: "error",
                                    message: err,
                                });
                            }
                        }
                    );

                    res.json(message);

                    this.io.emit("SERVER:NEW_MESSAGE", message);
                });
            })
            .catch((reason) => {
                res.json(reason);
            });
    };

    delete = (req, res) => {
        const id = req.params.id;
        MessageModel.findOneAndRemove({ _id: id })
            .then((message) => {
                if (message) {
                    res.json({
                        message: `Message deleted`,
                    });
                }
            })
            .catch((err) => {
                res.json({
                    message: "Message do not exist",
                });
            });
    };
}

export default MessageController;
