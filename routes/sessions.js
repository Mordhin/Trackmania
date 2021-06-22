import express from "express";
import { getSessions, createSessions } from "../controllers/sessions.js";

const router = express.Router();

router.get("/", getSessions);
router.post("/", createSessions);

export default router;
