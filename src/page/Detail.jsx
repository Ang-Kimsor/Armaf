import React from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { category, productname } = useParams();
  const Cate = category.toLowerCase().replaceAll("-", " ");
  const ProdName = productname.toLowerCase().replaceAll("-", " ");
  return Cate + " " + ProdName;
};

export default Detail;
