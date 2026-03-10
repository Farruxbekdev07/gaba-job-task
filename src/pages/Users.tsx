import { useState } from "react";
import { Pagination } from "@mui/material";

import { useUsers } from "../hooks/useUsers";
import { UserCard } from "../components/UserCard";
import { SearchInput } from "../components/SearchInput";

export const Users = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { users, total, loading, error } = useUsers(search, page);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <h1>Users</h1>
      <SearchInput value={search} onChange={setSearch} />
      <p>Total Users: {total}</p>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

      <Pagination
        count={Math.ceil(total / 10)}
        page={page}
        color="primary"
        onChange={handleChange}
      />
    </>
  );
};
