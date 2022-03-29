import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

const Display = (props) => {
  const { sendData } = props;
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
      
      >
        {sendData.map((x) => (
          <Grid   item xs={12} sm={4} md={4}   key={x}>
            <Card
              sx={{
                maxWidth: 260,
                marginLeft: 3,
                marginTop: 5,
              
               
              }}
            >
            <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="img"
          />
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#2D6EFD"
                  >
                    Welcome! {x.firstName}
                  </Typography>
                  <hr></hr>
                  <Typography variant="body2" color="black">
                    <p>Firstname : {x.firstName}</p>
                    <p>Surname : {x.lastName}</p>
                    <p>Age : {x.age}</p>
                    <p>Email : {x.email}</p>
                    <p>Password : **********</p>
                    <p>Contact Number: {x.number}</p>
                    <p>About Yourself: {x.yourself}</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Display;
