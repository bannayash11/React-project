import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

   useEffect(() => {
    if (slug) {
        appwriteService.getPost(slug).then((post) => {
            console.log("Post:", post);
            console.log("UserData:", userData);

            if (post) {
                setPost(post);
                console.log("Is Author:", post.userId === userData.$id);
            } else {
                navigate("/");
            }
        });
    } else {
        navigate("/");
    }
}, [slug, navigate, userData]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
<main className="container__main-page main__content">
<div className="spacer__container">
    <div className='single-posts'>
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className="rounded-xl"/>

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
            </div>
</div>
</main>    
    ) : null;
}
