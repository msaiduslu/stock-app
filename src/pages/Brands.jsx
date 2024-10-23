import React from "react";
import BrandCard from "../components/BrandCard";
import { Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyle";
import { useState } from "react";
import BrandModal from "../components/modals/BrandModal";

const Brands = () => {
  const { brands } = useSelector((state) => state.stock);
  const { getStockData } = useStockCall();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", image: "" });
  };
  const [info, setInfo] = useState({
    name: "",
    image: "",
  });
  useEffect(() => {
    getStockData("brands");
  }, []);
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Brands
      </Typography>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ marginBottom: "1rem" }}
      >
        New Brand
      </Button>
      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container sx={flex}>
        {brands?.map((brand) => (
          <Grid key={brand.id} item>
            <BrandCard
              brand={brand}
              setOpen={setOpen}
              info={info}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Brands;
