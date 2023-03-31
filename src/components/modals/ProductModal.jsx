import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/globalStyle";
import { Button, TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose, info, setInfo }) {
  const { postStockData } = useStockCall();
  const { categories, brands } = useSelector((state) => state.stock);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("products", info);
    handleClose();
    setInfo({ category_id: "", brand_id: "", name: "" });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="category"
                id="category"
                name="category_id"
                value={info?.category_id}
                label="Category"
                onChange={handleChange}
                required
              >
                {categories?.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brands</InputLabel>
              <Select
                labelId="brand"
                id="brand"
                name="brand_id"
                value={info?.brand_id}
                label="Brand"
                onChange={handleChange}
                required
              >
                {brands?.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              required
              value={info?.name || ""}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              Add New Product
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
