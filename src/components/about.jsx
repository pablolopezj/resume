import React from 'react';
import Social from './Social';
import style from 'styled-components';

const AboutStyle = style.div`
    text-align: center;
`;

const AboutAvatar = style.div`
    padding: 2rem 0 0 0;
`;

const AboutImg = style.img`
    border-radius: 100%;
    width: 10rem;
    height: 10rem;
    border: 2px solid #E91E63;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const AboutName = style.div`
    text-align: center;
`;

const AboutH2 = style.h2`
    font-family: 'Roboto', sans-seferi;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5rem 0 0 0;
    color: #C2185B;
`;

const AboutPrefession = style.p`
    margin: .2rem 0 1 rem 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #C2185B;
`;

const AboutBio = style.p`
    color: #757575;
    font-size: 1rem;
    font-weight: 300;
`;

const AboutLocation = style.p`
    color: #757575;
    font-size: 1rem;
    font-weight: 300;
`;

const About = ({avatar, name, profession, bio, address, social}) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src="https://http2.mlstatic.com/monkey-d-luffy-one-piece-tejido-amigurumi-crochet-peluche-D_NQ_NP_684979-MLM26179848998_102017-F.jpg" alt={name} />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2> {name} </AboutH2>
            </AboutName>
            <div className="About-profession">
                <AboutPrefession> {profession} </AboutPrefession>
            </div>
            <div className="About-desc">
                <AboutBio> {bio} </AboutBio>
            </div>
            <div className="About-location">
                <AboutLocation>{address}</AboutLocation>
            </div>
            <div className="About-social">
                <Social social = {social} />
            </div>
        </div>
    </AboutStyle>
);

export default About;
