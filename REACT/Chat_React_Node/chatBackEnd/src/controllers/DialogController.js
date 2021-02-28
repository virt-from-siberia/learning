import { DialogModel, MessageModel } from "../models";
import socket from "socket.io";

class DialogController {
    io;
    constructor(io) {
        this.io = io;
    }

    //NOTE/: Find dialogs by author
    index = (req, res) => {
        // const authorId = "5ea03c6928d2683954b868ec";
        const authorId = req.user._id;

        DialogModel.find({ author: authorId })
            .populate(["author", "partner"])
            .populate({
                path: "lastMessage",
                populate: {
                    path: "user",
                },
            })
            .exec(function (err, dialogs) {
                if (err) {
                    return res.status(404).json({
                        message: "Dialog not found",
                    });
                }
                return res.json(dialogs);
            });
    };

    create = (req, res) => {
        const postData = {
            author: req.body.author,
            partner: req.body.partner,
        };

        const dialog = new DialogModel(postData);

        dialog
            .save()
            .then((dialogObj) => {
                const message = new MessageModel({
                    text: req.body.text,
                    user: req.body.author,
                    dialog: dialogObj._id,
                });

                message
                    .save()
                    .then(() => {
                        res.json(dialogObj);
                    })
                    .catch((reason) => {
                        res.json(reason);
                    });
            })
            .catch((reason) => {
                res.json(reason);
            });
    };

    delete = (req, res) => {
        const id = req.params.id;

        DialogModel.findOneAndRemove({ _id })
            .then((dialog) => {
                if (dialog) {
                    res.json({
                        message: `Dialog deleted`,
                    });
                } else {
                    res.json({
                        message: "Dialog not found",
                    });
                }
            })
            .catch((err) => {
                res.json({
                    message: "Dialog do not exist",
                });
            });
    };
}

export default DialogController;
