export const getUsers = async (limit: number, skip: number) => {
  const response = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return data;
};

export const searchUsers = async (
  query: string,
  limit: number,
  skip: number,
) => {
  const response = await fetch(
    `https://dummyjson.com/users/search?q=${query}&limit=${limit}&skip=${skip}`,
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to search users");
  }

  return data;
};
