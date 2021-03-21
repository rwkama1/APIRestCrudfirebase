import cors from "../cors";
import {DProduct} from "crudfirebase/dproduct";

  export default  async  function  getProduct(req, res) {
    const { pbarcode } = req.query;
    await cors(req, res)
      const product=await DProduct.getInstance().getproduct(pbarcode);
      res.send(product);
  }
  