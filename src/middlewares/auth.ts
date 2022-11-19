import { expressjwt } from "express-jwt";
import authDB from "../database/default"

const auth = expressjwt({
  secret: authDB.key,
  algorithms: ["HS256"],
});

export default auth