'use client';

type PostTypes = {
    title: string;
    body: string;
};

const PostDetails = ({ title, body }: PostTypes) => {
    return (
        <div className='container mx-auto mt-10'>
            <div onClick={() => console.log(title)}><b>Title: </b>{title}</div>
            <div onClick={() => console.log(body)}><b>Body: </b>{body}</div>
        </div>
    );
};

export default PostDetails;