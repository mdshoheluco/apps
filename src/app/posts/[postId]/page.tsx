import PostDetails from "@/components/PostDetails";

const postDetails = async (postId: number) => {
    const postDetails = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await postDetails.json();
    return post;
};

async function SinglePost({ params }: any) {
    const postId = params.postId;
    const post = await postDetails(postId);
    return (
        <>
            <PostDetails title={post.title} body={post.body} />
        </>
    );
}

export default SinglePost;