import { Response } from "express";

/**
 * Manage type response errors
 * @param res 
 * @param type 
 * @param message 
 */

const handleHttp = (res: Response, type: 'NOT_FOUND' | 'SERVER_ERROR' | 'FORBIDDEN' | 'SUCCESS' | 'TOO_MANY_REQUESTS' | 'BAD_REQUEST', message: string | object) => {
    switch (type) {
        case 'BAD_REQUEST':
            res.status(400).send({ status: 400, message: message });
            break;
        case 'NOT_FOUND':
            res.status(404).send({ status: 404, message: message });
            break;
        case 'SERVER_ERROR':
            res.status(500).send({ status: 500, message: message });
            break;
        case 'FORBIDDEN':
            res.status(403).send({ status: 403, message: message });
            break;
        case 'SUCCESS':
            res.status(200).send({ status: 200, data: message });
            break;
    }
}

export { handleHttp };