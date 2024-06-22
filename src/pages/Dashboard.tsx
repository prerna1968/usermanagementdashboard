import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  CircularProgress,
  Box,
  Button,
} from "@mui/material";
import { AppRoutes } from "../constants/enum";

interface User {
  id: number;
  email: string;
  first_name: string;
  avatar: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUsers = async (page: number) => {
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${page}`);
      const json = await res.json();
      setUsers(json.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  React.useEffect(() => {
    fetchUsers(page);
  }, [isAuthenticated, navigate, page]);

  const handleLogout = () => {
    dispatch(logout());
    navigate(AppRoutes.SIGNIN);
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, 2));
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (!isAuthenticated) {
    return (
      <Typography variant="h6" color="error" align="center">
        Access Denied. Please sign in.
      </Typography>
    );
  }

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Button
            onClick={handleLogout}
            size="small"
            sx={{
              backgroundColor: "#F26522",
              color: "white",
              padding: "10px",
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginY: 4 }}>
        DASHBOARD
      </Typography>
      <Grid container spacing={4}>
        {users.length > 0 ? (
          users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={user.avatar}
                  alt={`${user.first_name}'s avatar`}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {user.first_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <CircularProgress />
          </Box>
        )}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button
          onClick={handlePreviousPage}
          disabled={page === 1}
          sx={{ marginRight: 2 }}
        >
          Previous
        </Button>
        <Button onClick={handleNextPage} disabled={page === 2}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
