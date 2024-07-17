import React, { useState, useEffect, useRef } from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import useSearch from "../hooks/useSearch";
import { fetchUsers } from "../api/api";
import { User } from "../types/types";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchedRef = useRef(false);
  const { searchTerm, handleSearch, filteredUsers } = useSearch(users);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <Grid container spacing={3}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserList;
