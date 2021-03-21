import cors from "../cors";
import {DProduct} from "crudfirebase/dproduct";

  export default  async  function  listexpression(req, res) {
    const { exp } = req.query;
    await cors(req, res)
   const listexp=await DProduct.getInstance().listproductsexpression(exp);
    res.send(listexp);
  }
  