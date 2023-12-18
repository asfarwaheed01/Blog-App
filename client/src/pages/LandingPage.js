import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

const LandingPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div>{posts.length > 0 && posts.map((post) => <Posts {...post} />)}</div>
  );
};

export default LandingPage;
