import { Router } from "express";
import { addEvent, getEvents, removeEvent } from "../controllers/events/index"

const router: Router = Router()

router.get("/events", getEvents)

router.post("/events", addEvent)

router.delete("/events/:id", removeEvent)

export default router