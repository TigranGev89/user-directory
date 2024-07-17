import { useEffect, useState } from "react";
import { User } from "../types/types";
import useQuery from "./useQuery";

const useSearch = (users: User[]) => {
  const { setQueryParam, getQueryParam } = useQuery();
  const [searchTerm, setSearchTerm] = useState(getQueryParam("search") || "");

  useEffect(() => {
    setQueryParam("search", searchTerm);
  }, [searchTerm, setQueryParam]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      `${user.name.firstname} ${user.name.lastname}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { searchTerm, handleSearch, filteredUsers };
};

export default useSearch;