import { Navigate, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import { Container } from "@mui/material";

const App: React.FC = () => {
  return (
		 <Container>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </Container>
  );
};

export default App;
