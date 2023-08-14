import { Box } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import Form from "../Form/Form"
import "./ButtonModal.css";

const ButtonModal = ({ name, bg="linear-gradient(rgb(255, 161, 0), rgb(255, 84, 0))",clr="white" ,bld = "400"}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log("cliked")
  };
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 5,
    p: 5,
    display: "flex",
    flexDirection: "column",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const buttonStyle = {
    borderRadius: "50%",
    color: "grey",
    minWidth: 0,
    width: "40px",
    height: "40px",
    padding: 0,
    fontSize: "30px",
  };

  return (
    <>
      <div>
        <button className="book_btn" onClick={handleOpen}
        style={{
        background: bg,
          color:clr,
          fontWeight:bld
      }}
        >
          {name}
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={buttonContainerStyle}>
            <Button style={buttonStyle} onClick={handleClose}>
              &times;
            </Button>
          </Box>
          <Form onCloseModal={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default ButtonModal;
