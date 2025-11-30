import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/customers">Customers</Button>
        <Button color="inherit" component={Link} to="/trainings">Trainings</Button>
      </Toolbar>
    </AppBar>
  );
}
