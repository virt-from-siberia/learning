import express from "express";
import { UserModel } from "../models";

export default (req, __, next) => {
    UserModel.findOneAndUpdate(
        { _id: req.user._id },
        {
            fullname: "test 1",
            last_seen: new Date(),
        },
        { new: true },
        () => {}
    );
    next();
};
