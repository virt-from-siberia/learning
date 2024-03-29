import express from "express";
import { verifyJWTToken } from "../utils";
import { IUser } from "../models/User";

export default (req, res, next) => {
    if (
        req.path === "/user/login" ||
        req.path === "/user/registration" ||
        req.path === "/user/verify"
    ) {
        return next();
    }

    const token = req.headers.token;

    verifyJWTToken(token)
        .then((user) => {
            req.user = user.data._doc;
            next();
        })
        .catch((err) => {
            res.status(403).json({ message: "Invalid auth token provided." });
        });
};
