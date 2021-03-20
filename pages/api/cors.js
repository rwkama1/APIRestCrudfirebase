import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import {DProduct} from 'crudfirebase/dproduct';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST,PUT,DELETE and OPTIONS
    methods: ['GET', 'POST', 'PUT','DELETE','OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)
  const list=await DProduct.getInstance().listproducts();
  // Rest of the API logic
  res.json(list)
}
