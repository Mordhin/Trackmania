import express from "express";
import { getSessions, createSessions } from "../controllers/sessions.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getSessions);
router.post("/", auth, createSessions);

export default router;
