import { useEffect, useState } from "react";

import type { User } from "../types/user";
import { useDebounce } from "./useDebounce";
import { getUsers, searchUsers } from "../api/users";

const LIMIT = 10;

export const useUsers = (search: string, page: number) => {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const skip = (page - 1) * LIMIT;

        if (!debouncedSearch) {
          const data = await getUsers(LIMIT, skip);
          setUsers(data.users);
          setTotal(data.total);
          return;
        }

        const data = await searchUsers(debouncedSearch, LIMIT, skip);

        setUsers(data.users);
        setTotal(data.total);
      } catch (error) {
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [debouncedSearch, page]);

  return { users, total, loading, error };
};
