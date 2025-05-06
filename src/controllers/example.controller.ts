import { Request, Response } from "express";
import { handleHttp } from "../utils/response.handle";
import { exampleService } from "../services/example.service";


const ExampleMethod = async (req: Request, res: Response) => {
    try {
        const response = await exampleService();
        handleHttp(res, 'SUCCESS', response)
    } catch (error) {
        handleHttp(res, 'SERVER_ERROR', 'ERROR_GET_INFORMATION');
    }
}

export { ExampleMethod };