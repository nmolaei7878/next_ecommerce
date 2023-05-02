import http from "../util/http";
import ProductModel from "../types/product";

const getAllProducts = async (): Promise<Array<ProductModel>> => {
  return (await http.get("/products")).data;
};

const getProduct = async (id: string): Promise<ProductModel> => {
  return (await http.get(`/products/${id}`)).data;
};

const ProductService = {
  getAllProducts,
  getProduct,
};

export default ProductService;
