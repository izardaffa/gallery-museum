import React from 'react';
import { Link } from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import blogs from '../../api/blogs'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt="" />
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Post Categories</h3>
                    <ul>
                        <ul>
                            <li><Link onClick={ClickHandler} to="/blog">Perfect Planning <span>5</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">Professional Design <span>7</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">Best Interior <span>3</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">Modern Furniture<span>6</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">Best Gift <span>2</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">Complete Decoration <span>8</span></Link></li>
                        </ul>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.slice(0, 3).map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title2}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link to="/blog">Planning</Link></li>
                        <li><Link to="/blog">Design</Link></li>
                        <li><Link to="/blog">creative</Link></li>
                        <li><Link to="/blog">Interior</Link></li>
                        <li><Link to="/blog">Furniture</Link></li>
                        <li><Link to="/blog">Idea</Link></li>
                        <li><Link to="/blog">Decoration</Link></li>
                        <li><Link to="/blog">Architectural</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
