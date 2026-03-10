import type { User } from "../types/user";

export const UserCard = ({ user }: { user: User }) => {
  return (
    <div>
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        width={50}
      />
      {user.firstName} {user.lastName} - {user.email}
    </div>
  );
};
