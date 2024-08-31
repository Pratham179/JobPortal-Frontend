import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    Grid2,
    Typography,
    Button,
  } from "@mui/material";
  

const Navbar = () => {
  return (
    <div>
      <Grid2 container spacing={2} sx={{ margin: "2%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ background: '#ADD8E6' }}>
            <Toolbar variant="dense">
              <Typography variant="h4" align='Left' component="div" sx={{ flexGrow: 1, fontFamily:"revert", fontSize:"500", color:"black" }}>
                Job Portal
              </Typography>

              <Box sx={{ m: 0.5, mx: 'auto', width: 80 }}>
                <Button variant="outlined" href='http://localhost:3000'>Home</Button>
               </Box>
              <Box sx={{ m: 0.5, mx: 'auto', width: 100 }}>
                <Button variant="outlined" href='http://localhost:3000/create'>Add Job</Button>
              </Box>
              <Box sx={{ m: 0.5, mx: 'auto', width: 180 }}>
                <Button variant="outlined" href='https://github.com/Pratham179'>Contact Us</Button>
               </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </Grid2>
      <Grid2 item xs={12} sx={12} md={12} lg={12}>
      </Grid2>
    </div>
  )
}

export default Navbar