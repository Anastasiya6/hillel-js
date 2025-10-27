import PageHeader from "../components/PageHeader/index.js";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchData} from "../utils/api.js";
import {editPost} from "../utils/api.js";
import {useNavigate} from "react-router-dom";
import {Alert, Button, Spinner, Form} from "react-bootstrap";
import routerPaths from "../router/routerPaths.js";

const EditPost = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [isRequestSuccess, setIsRequestSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = ({target}) => {
        const localPost = {...post}
        localPost[target.name] = target.value
        setPost(localPost)
    }

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true)
            try {
                const data  = await fetchData(`/posts/${id}`);
                setPost(data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        loadPosts()
    }, []);

    const getPostTitle  = () => {
        let title = 'Post #' + id;

        if(post !== null) {
            title = post.title
        }

        return title
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(loading) return;

        setLoading(true)
        try {
            await editPost(post,`${id}`);
            setPost({...post})
            setIsRequestSuccess(true)
            setTimeout(() => {
                navigate(routerPaths.posts)
            }, 2000)
        } catch (error) {
            console.log(error)
            setIsRequestSuccess(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <PageHeader title={getPostTitle()} />
            {isRequestSuccess ? <Alert variant={'success'} className="text-center">Data Saved!</Alert> : null}

            {loading ? <Alert variant={'warning'} className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading post...</span>
                </Spinner>
            </Alert> : null}

            {post ? <Form className='col-md-6 offset-md-3' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label column={false}>Title</Form.Label>
                    <Form.Control disabled={loading} type="text" placeholder="Enter title" name={'title'} value={getPostTitle()} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label column={false}>Body</Form.Label>
                    <Form.Control disabled={loading} as="textarea" placeholder="Body" rows={3} name={'body'} value={post.body} onChange={handleChange}/>
                </Form.Group>
                <Button variant={loading ? 'secondary' : 'primary'} type="submit" className='d-flex align-items-center gap-2' disabled={loading}>
                    <span>Submit</span>

                    {loading && <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading post...</span>
                    </Spinner>}
                </Button>
            </Form> : null}
        </div>
    );
};

export default EditPost;
