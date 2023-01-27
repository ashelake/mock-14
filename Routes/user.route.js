const express = require("express");
const UserModal = require("../Modal/user.modal");

const userRouter = express.Router();

userRouter.get("/random1", async (req, res) => {
  let array = ["hell", "masa", "leve", "alph", "know"];

  let word = array[Math.floor(Math.random() * array.length)];

  console.log(word);
  res.send({ word: word });
});
userRouter.get("/random2", async (req, res) => {
  let array = ["helloo", "masaii", "levell", "alphab", "knowef"];

  let word = array[Math.floor(Math.random() * array.length)];

  console.log(word);
  res.send({ word: word });
});
userRouter.get("/random3", async (req, res) => {
  let array = [
    "hellooween",
    "masaiien",
    "levelling",
    "alphabates",
    "knoweledge",
  ];

  let word = array[Math.floor(Math.random() * array.length)];

  console.log(word);
  res.send({ word: word });
});
userRouter.post("/form", async (req, res) => {
  const data = await UserModal.insertMany(req.body);

  res.send({ msg: "Post Successfull", data });
});
userRouter.get("/form", async (req, res) => {
  const data = await UserModal.find();

  res.send({ data });
});
userRouter.patch(`/form/:id`, async (req, res) => {
  const data = await UserModal.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );

  res.send({ msg: "Patch Successfull", data });
});
module.exports = userRouter;
