import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import usePhoneBookStore from "./stores/usePhonebookStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usePhoneBookStore();
  // const {user} = useUserStore();
  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) return;
    // 연락처를 추가
    addContact(name, phoneNumber);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      // border="1px solid #000"
      sx={{ width: "100%" }}
    >
      <TextField
        fullWidth
        id="name"
        label="이름"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        id="phone-number"
        label="전화번호"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={handleAddContact}>
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;
