import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyle";

const Firms = () => {
  const { firms } = useSelector((state) => state.stock);
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
    getStockData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button onClick={handleOpen} variant="contained">
        New Firm
      </Button>
      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid key={firm.id} item>
            <FirmCard
              firm={firm}
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

export default Firms;
