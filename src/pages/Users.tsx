import {
  Box,
  Grid,
  Alert,
  Skeleton,
  Typography,
  Pagination,
} from "@mui/material";
import { useEffect, useState } from "react";

import { useUsers } from "../hooks/useUsers";
import { UserCard } from "../components/UserCard";
import { SearchInput } from "../components/SearchInput";

const PAGE_SIZE = 10;

export const Users = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { users, total, loading, error } = useUsers(search, page);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(1);
  }, [search]);

  const skeletons = Array.from({ length: PAGE_SIZE });

  return (
    <Grid container direction="column" rowSpacing={3}>
      <Grid size="auto">
        <SearchInput value={search} onChange={setSearch} />
        <Box mt={1}>
          <Typography variant="body2" color="text.secondary">
            Total users: {total}
          </Typography>
        </Box>
      </Grid>

      <Grid container columns={12} columnSpacing={2} rowSpacing={2}>
        {loading
          ? skeletons.map((_, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Skeleton
                  variant="rectangular"
                  height={250}
                  sx={{ borderRadius: 2 }}
                />
              </Grid>
            ))
          : users.map((user) => (
              <Grid key={user.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <UserCard user={user} />
              </Grid>
            ))}
      </Grid>

      <Grid size="auto">
        {error && <Alert severity="error">{error}</Alert>}
        {!error && !loading && users.length === 0 && (
          <Alert severity="info">No users found</Alert>
        )}
      </Grid>

      {!loading && total > PAGE_SIZE && (
        <Grid container justifyContent="center">
          <Pagination
            page={page}
            color="primary"
            onChange={handleChange}
            count={Math.ceil(total / PAGE_SIZE)}
          />
        </Grid>
      )}
    </Grid>
  );
};
