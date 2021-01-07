import React from 'react';
import { Author, Container, Title } from "../../style/components/posts/PostListItem.style";

const PostListItem = ({ post }) => (
    <Container>
        <Title>{post.title}</Title>
        <Author>écrit par {post.author}</Author>
    </Container>
);

export default PostListItem;
