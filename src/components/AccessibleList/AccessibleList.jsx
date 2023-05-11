import React, { useState, useEffect, useContext } from "react";
import Post from "../Post/Post";
import { Context } from "../../context";

function AccessibleList() {
  const [context, setContext] = useContext(Context);
  const [list, setList] = useState({});

  useEffect(() => {
    context.then(data => setList(data.tweets.sort((a, b) => b.id - a.id)))
    
  }, [context]);
  

  return <div className="accessible-list">
    { list.length ?  list.map((post, index) => <Post key={index} post={post} /> ) : 'loading...' }
  </div>;
}


export default AccessibleList;
