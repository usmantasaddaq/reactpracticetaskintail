import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Clock from "react-digital-clock";

const Increment = () => {
  const [value, setvalue] = useState(0);
  const Sub = () => {
    if (value > 0) {
      return setvalue(value - 1);
    } else {
      setvalue(value);
      alert("no more decrement");
    }
  };

  const Add = () => {
    return setvalue(value + 1);
  };

  return (
    <>
      <div>
        <h1>
          {" "}
          <Clock />
        </h1>
        <h1>{value}</h1>
        <Tooltip title="Add">
          <Button onClick={Add}>
            {" "}
            <AddIcon />{" "}
          </Button>
        </Tooltip>
        <Tooltip title="Delete">
          <Button onClick={Sub}>
            <DeleteIcon />
          </Button>
        </Tooltip>
      </div>
    </>
  );
};
export default Increment;
