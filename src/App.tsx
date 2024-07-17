import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import { Container } from "@mui/material";

const App: React.FC = () => {
  return (
		 <Container>
      <Routes>
        <Route path="/" element={<UserList />} />
      </Routes>
    </Container>
  );
};

export default App;
