import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Card,Grid2,Typography,} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

const handleEdit = (id) => {
  navigate("/edit",{state:{id}});
}

    // useEffect(() => {
    //     const fetchInitialPosts = async () => {
    //         const response = await axios.get(`http://localhost:8080/jobPosts`);
    //         setPost(response.data);
    //     }
    //      fetchInitialPosts();
    //   }, []);


    useEffect(() => {
      const fetchInitialPosts = async () => {
          try {
              const response = await axios.get('http://localhost:8000/posts');
              setPost(response.data);
          } catch (error) {
              if (error.response) {
                  // Server responded with a status other than 2xx
                  console.error("Server Error:", error.response);
              } else if (error.request) {
                  // No response was received
                  console.error("Network Error: No response received", error.request);
              } else {
                  // Other errors
                  console.error("Error:", error.message);
              }
          }
      };
      fetchInitialPosts();
  }, []);
  



      const handleDelete = (id) => {
        async function deletePost() {
          await axios.delete(`http://localhost:8080/jobPost/${id}`);
          console.log("Delete")
      }
      deletePost();
      window.location.reload();
      }

  return (
    <>
      <Grid2 container spacing={2} sx={{ margin: "2%" }}>
      <Grid2 item xs={12} sx={12} md={12} lg={12}>
      </Grid2>
      {post &&
        post.map((p) => {
          return (
            <Grid2 key={p.id} item xs={12} md={6} lg={4}>
              <Card sx={{ padding: "3%", overflow: "hidden", width: "84%", backgroundColor:"#ADD8E6" }}>
                <Typography        
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600", fontFamily:"sans-serif" }}
                >
             {p.postProfile}
                </Typography>
                <Typography  sx={{ color: "#585858", marginTop:"2%", fontFamily:"cursive" }} variant="body" >
                  Description: {p.postDesc}
                </Typography>
                <br />
                <br />
                <Typography variant="h6" sx={{ fontFamily:"unset", fontSize:"400"}}>
                  Experience: {p.reqExperience} years
                </Typography>
                <Typography sx={{fontFamily:"serif",fontSize:"400"}} gutterBottom  variant="body">Skills : </Typography>
                {p.postTechStack.map((s, i) => {
                  return (
                    <Typography variant="body" gutterBottom key={i}>
                      {s} .{` `}
                    </Typography>
                  );
                })}
               <DeleteIcon onClick={() => handleDelete(p.postId)} />
                <EditIcon onClick={() => handleEdit(p.postId)} />
              </Card>
            </Grid2>
          );
        })}
    </Grid2>
    </>
 
  )
}

export default Search