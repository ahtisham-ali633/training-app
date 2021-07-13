import React, { useState } from "react";
import {  Input, Button } from 'antd';

function PeopleSearchBar({dispatchSearchAction}) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchClick = () => {
    dispatchSearchAction(searchTerm);
  };
  return (
    <div>
      <Input
        onChange={handleSearchTermChange}
        fullWidth
        variant="outlined"
        placeholder="Search"
      />
      <Button
        onClick={handleSearchClick}
        style={{ marginTop: 16 }}
        color="primary"
      >
        search
      </Button>
    </div>
  );
}

export default PeopleSearchBar