import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import { btnStyle, flex } from "../styles/globalStyle";
import useStockCall from "../hooks/useStockCall";

export default function BrandCard({ brand, setOpen, setInfo }) {
  const { deleteStockData } = useStockCall();
  return (
    <Card
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand?.name}
        </Typography>
      </CardContent>
      <CardMedia
        image={brand?.image}
        sx={{ p: 1, objectFit: "contain", height: "130px" }}
        component="img"
        alt="brand-img"
      />
      <CardActions sx={flex}>
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            setOpen(true);
            setInfo(brand);
          }}
        />
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStockData("brands", brand.id)}
        />
      </CardActions>
    </Card>
  );
}
