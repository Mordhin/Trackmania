import SessionMessage from "../models/sessionMessage.js";

export const getSessions = async (req, res) => {
  try {
    const sessionMessages = await SessionMessage.find();
    res.status(200).json(sessionMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSessions = async (req, res) => {
  const session = req.body;
  const newSession = new SessionMessage(session);
  try {
    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
