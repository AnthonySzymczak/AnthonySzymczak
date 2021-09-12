import React from 'react'
import data from '../info/info'
import GithubCards from '../GithubCards';


function Portfolio (){
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <div>
                                    <h3 className="Portfolio">Project Portfolio</h3>
                                </div>
                                <div className="modal-footer" />

                                <div className="grid-container vertical-line">
                                    {data.map((info) => (
                                        <GithubCards
                                            id={info.id}
                                            image={info.image}
                                            name={info.name}
                                            github={info.github}
                                            deploy={info.deploy}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Portfolio;