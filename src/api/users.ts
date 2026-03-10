export const getUsers = async (limit: number, skip: number) => {
  const response = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
  );

  if (!response.ok) {
    console.log("failed to fetch users");
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();

  console.log("response:", data);

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

  if (!response.ok) {
    console.log("failed to fetch users");
    throw new Error("Failed to search users");
  }

  const data = await response.json();

  console.log("response:", data);

  return data;
};
