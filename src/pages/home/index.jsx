import React from 'react';
import "./style.css";

const Home = () => {
    return (
        <div id="home">
            <h2 className="blog-post-title text-uppercase">I'm a developer.</h2>
            <h5>Also here you have some amazing photos.</h5>
            <hr />
            <blockquote className="blockquote text-center">
                <a href="https://www.instagram.com/p/Bnnpy56FJZW/" target="_blank"><img className="image-home" src="https://i.imgur.com/d5vtMROm.jpg" /></a>
                <a href="https://www.instagram.com/p/BmLRFQAFCkX/" target="_blank"><img className="image-home" src="https://i.imgur.com/5NR8pmdm.jpg" /></a>
                <a href="https://www.instagram.com/p/Bnjo4J_F24i/" target="_blank"><img className="image-home" src="https://i.imgur.com/kzsORZjm.jpg" /></a>
                <a href="https://www.instagram.com/p/BqH5APalLdL/" target="_blank"><img className="image-home" src="https://i.imgur.com/yrkESQcm.jpg" /></a>
                <a href="https://www.instagram.com/p/BkRi3H3loED/" target="_blank"><img className="image-home" src="https://i.imgur.com/49BMtRxm.jpg" /></a>
                <a href="https://www.instagram.com/p/By_Fx3fBS2x/" target="_blank"><img className="image-home" src="https://i.imgur.com/wgZVyjRm.jpg" /></a>
            </blockquote>
        </div>
    )
}

export default Home;