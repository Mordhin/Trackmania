import Mongoose from "mongoose";
import Session from "../models/session.js";

export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSessions = async (req, res) => {
  const session = req.body;
  const newSession = new Session({
    ...session,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/* export const updateSession = async (req, res) => {
  const { id: _id } = req.params;
  const session = req.body;

  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");
  const updatedSession = await Session.findByIdAndUpdate(_id, session, {
    new: true,
  });
  res.json(updatedSession);
};
 */

export const deleteSession = async (req, res) => {
  console.log(req);
  const { id } = req.params;
  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No session with that id");
  await Session.findByIdAndDelete(id);
  res.json({ message: "Session deleted succesfully" });
};
