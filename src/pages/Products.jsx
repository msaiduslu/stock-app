import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductModal from "../components/modals/ProductModal";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyle";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Products = () => {
  const { products } = useSelector((state) => state.stock);
  const { getStockData } = useStockCall();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", phone: "", address: "", image: "" });
  };
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  useEffect(() => {
    getStockData("products");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Products
      </Typography>
      <Button onClick={handleOpen} variant="contained">
        New Product
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Brand</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Operation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product, index) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">{product.brand}</TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.stock}</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
