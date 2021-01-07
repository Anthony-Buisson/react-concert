import '../../App.css';
import axios from 'axios';
import { BASE_URL } from "../../env";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostListItem from "./PostListItem";

const PostList = (props) => {
    const {reduxPosts, addPost} = props;
    const [posts, setPosts] = useState([]);
    let url = BASE_URL+'/posts';

    useEffect( ()=>{
        (async function fetchData() {
            const { data } = await axios.get(url)
            setPosts(data)
            addPost(data[0]) //MAJ du store
        })()
    }, [])

  return (
    <div className="App">
      <header className="App-header">
          <Link to={'/'} >HOME</Link>
        <h1>Liste des posts, ({reduxPosts?.length ?? 0 }) total</h1>
          {posts.map((p, index)=>(<PostListItem post={p} key={index}></PostListItem>))}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
    reduxPosts: state.post.posts
})

const mapDispatchToProps = dispatch => {
    return {
        addPost: (post) => dispatch({type: 'post/addPost', payload: post})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

