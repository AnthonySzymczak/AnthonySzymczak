import React from 'react'

function GithubCards(props) {
        return (
            <div className={`cards--${props.id}`}>
                <img src={props.image} alt={props.name}
                     className="cards"/>
                <div className="desc">
                    <h5>{props.name}</h5>
                </div>
    
                <div className='links'>
                    <a href={props.github} target="_blank"><i class="fas fa-code-merge" alt="Github Repository"/></a>
                    <a href={props.deploy} target="_blank"><i class="fas fa-laptop-code" alt="Deployed Application"/></a>
                </div>
            </div>
        );
    };

    export default GithubCards;