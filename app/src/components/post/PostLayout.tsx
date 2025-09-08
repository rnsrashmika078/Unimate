import React from "react";
interface PostLayout {
    children: React.ReactNode;
}
const PostLayout = ({ children }: PostLayout) => {
    return (
        <div
            className=" border min-w-sm max-w-md m-auto p-2 border-[var(--border-color)] rounded-xl shadow-xl"
            style={{ background: "var(--gradient-background)" }}
        >
            {children}
        </div>
    );
};

export default PostLayout;
