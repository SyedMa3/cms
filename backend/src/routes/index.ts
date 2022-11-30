import { Router } from "express";
import { addEvent, getEvents } from "../controllers/events/index"

const router: Router = Router()

router.get("/events", getEvents)

router.post("/events", addEvent)

export default router