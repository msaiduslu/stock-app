import React from "react";
import BrandCard from "../components/BrandCard";
import { Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyle";

const Brands = () => {
  const { brands } = useSelector((state) => state.stock);
  const { getStockData } = useStockCall();
  useEffect(() => {
    getStockData("brands");
  }, []);
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Brands
      </Typography>
      <Button variant="contained">New Brand</Button>
      <Grid container sx={flex}>
        {brands?.map((brand) => (
          <Grid key={brand.id} item>
            <BrandCard brand={brand} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Brands;
