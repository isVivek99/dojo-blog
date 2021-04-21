import { useState } from 'react';
import BlogList from './BlogList';
const Home  = () => {

    const[blogs, setBlogs] = useState([
    { title:'My new Website', body:'lorem ipsum...', author:'connor', id:1 },
    { title:'welcome party', body:'lorem ipsum...', author:'justin', id:2 },
    { title:'pro tips!!', body:'lorem ipsum...', author:'yoel', id:3 }
    ]);

    return (  
        <div className="home">
                <BlogList blogs={ blogs }/>
        </div>        
    );
}
 
export default Home ;
