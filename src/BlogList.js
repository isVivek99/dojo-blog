const BlogList=(props)=>{
    
    let blogs = props.blogs;
    let setBlogs = props.setBlogs;
    
    const onClickDelete=(id)=>{
        const newBlogs = blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
    }
    return(
        <div className="blog">
            { blogs.map((blog)=>(
                <div className="blog-preview">
                    <h1>{blog.title}</h1>
                    <p>written by {blog.author}</p>
                    <button className="btn-delete" onClick={()=>(onClickDelete(blog.id))}>delete</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;