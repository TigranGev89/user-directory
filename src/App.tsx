import { Container, Typography } from "@mui/material";
import UserList from "./components/UserList";

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Users List
      </Typography>
      <UserList />
    </Container>
  );
};

export default App;
