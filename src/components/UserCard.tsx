import Card from "@mui/material/Card";
import { Avatar, Box } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import CardContent from "@mui/material/CardContent";
import SchoolIcon from "@mui/icons-material/School";
import CardActionArea from "@mui/material/CardActionArea";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { InfoRow } from "./InfoRow";
import type { User } from "../types/user";

export function UserCard({ user }: { user: User }) {
  const {
    age,
    image,
    email,
    phone,
    address,
    lastName,
    firstName,
    birthDate,
    university,
    company: { name: companyName, title, department },
  } = user;

  const formattedDate = new Date(birthDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card sx={{ height: "100%" }}>
      <CardActionArea sx={{ height: "100%" }}>
        <Box display="flex" alignItems="center" p={2}>
          <Avatar src={image} alt={`${firstName} ${lastName}`} />
          <Box ml={2}>
            <Typography variant="h6">
              {firstName} {lastName}
            </Typography>
            <Typography variant="body2">
              {title} at {companyName}
            </Typography>
          </Box>
        </Box>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            <b>{department}</b>
          </Typography>
          <InfoRow icon={<CalendarMonthIcon />} color="warning">
            {formattedDate} ({age} years old)
          </InfoRow>
          <InfoRow icon={<EmailIcon />} color="disabled">
            {email}
          </InfoRow>
          <InfoRow icon={<CallIcon />} color="success">
            {phone}
          </InfoRow>
          <InfoRow icon={<LocationOnIcon />} color="error">
            {address.state}, {address.country}
          </InfoRow>
          <InfoRow icon={<SchoolIcon />} color="primary">
            {university}
          </InfoRow>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
