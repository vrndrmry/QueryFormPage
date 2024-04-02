import QueryModel from "../models/Query.js";

export const getQueryFormDetails = (req, res) => {
  try {
    // const {username} = req.body
    console.log(req.body);
    res.status(200).json("username");
  } catch (err) {
    console.log(err);
  }
};
