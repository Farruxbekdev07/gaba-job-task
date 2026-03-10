import { TextField } from "@mui/material";

export const SearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <TextField
      fullWidth
      value={value}
      variant="outlined"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
