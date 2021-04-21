const BlogList=(props)=>{
    let blogs = props.blogs;
    return(
        <div className="blog">
            { blogs.map((blog)=>(
                <div className="blog-preview">
                    <h1>{blog.title}</h1>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;