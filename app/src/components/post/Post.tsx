import React from "react";
import CustomImage from "@/public/images/sample_4.jpg";
import PostLayout from "./PostLayout";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostAction";
const Post = () => {
    return (
        <PostLayout>
            <PostHeader
                avatarUrl="https://i.pravatar.cc/150?img=5"
                username="Rashmika Siriwardhana"
                date="Sep 8, 2025"
            />
            <PostContent
                description="Had an amazing day at the beach 🏖️🌊"
                image={CustomImage}
            />
            <PostActions />
        </PostLayout>
    );
};

export default Post;
