import React from 'react';
import Social from './Social';

const About = ({avatar, name, profession, bio, address, social}) => (
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src="https://http2.mlstatic.com/monkey-d-luffy-one-piece-tejido-amigurumi-crochet-peluche-D_NQ_NP_684979-MLM26179848998_102017-F.jpg" alt={name} />
                </figure>
            </div>
            <div className="About-name">
                <h2> {name} </h2>
            </div>
            <div className="About-profession">
                <p> {profession} </p>
            </div>
            <div className="About-desc">
                <p> {bio} </p>
            </div>
            <div className="About-location">
                <p>{address}</p>
            </div>
            <div className="About-social">
                <Social social = {social} />
            </div>
        </div>
    </div>
);

export default About;
