import { UnauthorizedError } from "express-jwt";
import { ValidationError } from "express-validation";
import MESSAGE from "../constants/messages";

export default function handleError(error: any, req: any, res: any, next: any) {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }

  if (error instanceof UnauthorizedError) {
    return res.status(error.status).json(error);
  }

  if (error.name === "SequelizeForeignKeyConstraintError") {
    if (error.parent.code === "ER_NO_REFERENCED_ROW_2") {
      return res.status(400).json(MESSAGE.ERROR.CREATE_FAIL);
    }
    return res.status(400).json(MESSAGE.ERROR.CONSTRAINT);
  }

  return res.status(500).json(error);
}
