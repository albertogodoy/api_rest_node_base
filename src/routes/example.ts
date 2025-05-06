import { Router } from "express";
import { ExampleMethod } from "../controllers/example.controller";

const router = Router();

/**
 * [GET /example]
 */
router.get('/', ExampleMethod);

export { router };