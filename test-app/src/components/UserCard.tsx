import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Avatar,
  Stack,
} from "@mui/material";
import { User } from "./types";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card sx={{ borderRadius: 8 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://i.pravatar.cc/150?img=${user.id}`}
        alt={`${user.name.firstname} ${user.name.lastname}`}
      />
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src={`https://i.pravatar.cc/150?img=${user.id}`} />
          <Typography variant="h6" component="div">
            {user.name.firstname} {user.name.lastname}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          Email: {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {user.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address: {user.address.street}, {user.address.city},{" "}
          {user.address.zipcode}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
