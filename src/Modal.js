import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EditContact from "./EditContact";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedContact } from './store'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function BasicModal() {
  const selected = useSelector(state => state.selectedContact);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setSelectedContact(null))
  }

  return (
    <div>
      <Modal
        open={selected}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditContact contact={selected} />
        </Box>
      </Modal>
    </div>
  );
}
