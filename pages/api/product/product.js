import cors from "../cors";
import {DProduct} from "crudfirebase/dproduct";
import {Product} from "crudfirebase/dproduct";

export default async function (req, res) {
  if(req.method==="GET")
  {
    await cors(req, res)
    const list=await DProduct.getInstance().listproducts();
    res.send(list);
  }
  if(req.method==="POST")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    var dtproduct=new Product(data.barcode, data.name,data.price);
    
    const addproduct=await DProduct.getInstance().addProduct(dtproduct);
    return res.status(200).json({ status: "Success" });
    }
    catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not add product", error }
      });
    }
  }
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    var dtproduct=new Product(data.barcode, data.name,data.price);
    const updprod=await DProduct.getInstance().updateProduct(dtproduct);
    return res.status(200).json({ status: "Success" });
    }
    catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not update product", error }
      });
    }
  }
  if(req.method==="DELETE")
  {
    await cors(req, res);
    const { barcode } = req.query;
    try
    {
    var dtproduct=new Product(barcode, "",0);
    const delprod=await DProduct.getInstance().deleteProduct(dtproduct);
    return res.status(200).json({ status: "Success" });
    }
    catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not delete product", error }
      });
    }
  }
  }
  // export  async  function  getProduct(req, res) {
  //   const { pbarcode } = req.query;
  //   await cors(req, res)
  //     const product=await DProduct.getInstance().getproduct(pbarcode);
  //     res.json(product);
  // }
  