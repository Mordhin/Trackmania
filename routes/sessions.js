import express from "express";
import {
  getSessions,
  createSessions,
  deleteSession,
} from "../controllers/sessions.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getSessions);
router.post("/", auth, createSessions);
/* router.patch("/:id", auth, updateSession); */
router.delete("/:id", auth, deleteSession);

export default router;
