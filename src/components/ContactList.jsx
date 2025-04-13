import React, { useState } from "react";
import usePhoneBookStore from "./stores/usePhonebookStore";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const ContactList = () => {
  const { phoneBook } = usePhoneBookStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
  };
  const handleShowAll = () => {
    setSearchTerm("");
    setIsSearching(false);
  };
  const filteredContacts = isSearching
    ? phoneBook.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : phoneBook;
  // console.log(phoneBook)
  return (
    <Box display="flex" flexDirection="column" gap={3} alignItems="center">
      <Stack direction="row" spacing={2}>
        <TextField
          label="이름 검색"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          검색
        </Button>
        <Button variant="outlined" onClick={handleShowAll}>
          전체 <br/>보기
        </Button>
      </Stack>

      <Box
        mt={2}
        display="flex"
        flexDirection="column"
        gap={1}
        width="100%"
        alignItems="center"
      >
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <div key={contact.id}>
              {contact.name} - {contact.phoneNumber}
            </div>
          ))
        ) : (
          <div>검색 결과가 없습니다</div>
        )}
      </Box>
      
    </Box>
  );
};

export default ContactList;
