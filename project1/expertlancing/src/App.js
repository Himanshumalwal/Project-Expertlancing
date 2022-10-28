import "./App.css";

import * as React from "react";
import TextField from "@mui/material/TextField";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";


import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="main">
            <div className="sub-main">
              <div>
                <div className="imgs">
                  <div className="container-image">
                    {/* <img src={profile} alt="profile" className="profile"/> */}
                  </div>
                </div>
                <div>
                  <h1 style={{textAlign:"center"}}>Login Page</h1>
                  <div>
                    {/* <input
                      type="text"
                      placeholder="user name"
                      className="name"
                    /> */}
                    <TextField id="filled-basic" label="Username" variant="filled" fullWidth/>
                  </div>
                  <br />
                  <div className="second-input">
                    {/* <input
                      type="password"
                      placeholder="user name"
                      className="name"
                    /> */}
                    <TextField id="filled-basic" label="Password" variant="filled" type="password" fullWidth/>
                  </div>
                  <br/>
                  <div style={{display:"flex"}}>
                 
                    <Button variant="outlined">Login</Button>&nbsp;&nbsp;
                  
                    <Button variant="outlined"
                      onClick={() => {
                        handleClose();
                        handleOpen1();
                      }}
                    >
                      Sign Up
                    </Button>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="main">
            <div className="sub-main">
              <div>
                <div className="imgs">
                  <div className="container-image">
                    {/* <img src={profile} alt="profile" className="profile"/> */}
                  </div>
                </div>
                <div>
                  <h1 style={{textAlign:"center"}}>Register Page</h1>
                  <div>
                    {/* <input
                      type="text"
                      placeholder="user name"
                      className="name"
                    /> */}
              <TextField id="filled-basic" label="Username" variant="filled" fullWidth/>

                  </div><br/>
                  <div className="second-input">
                    {/* <input
                      type="password"
                      placeholder="user name"
                      className="name"
                    /> */}
                    <TextField id="filled-basic" label="Password" variant="filled" type="password" fullWidth/>
                  </div>
                  <br/>
                  <div style={{display:"flex"}}>
                  
                    <Button variant="outlined">Register</Button>&nbsp;&nbsp;
                    <Button variant="outlined"
                      onClick={() => {
                        handleClose1();
                        handleOpen();
                      }}
                    >
                      Sign In
                    </Button>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button color="inherit" onClick={handleOpen}>
              Login
            </Button>
            <Button color="inherit" onClick={handleOpen1}>
              Register
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        {/* <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      > */}
        <span style={{ fontSize: "3rem" }}>Google</span>
        <br />
        {/* <TextField style={{ width: "45%" }} /> */}
        <TextField
          style={{ width: "30%" }}
          // id="input-with-icon-textfield"
          // label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        {/* </Box> */}
      </div>
    </>
  );
}

export default App;
