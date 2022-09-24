import React, { useContext } from 'react'

import { store } from './Details'
import Card from './Card'
import Smallcard from './Smallcard';

const Bollywood = () => {
    const [detail] = useContext(store);
    console.log(detail);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>BOLLYWOOD</h1>
            <h1 style={{ margin: "20px 0px 20px 34.15%", display: "inline-block" }}>Top Posts</h1>
            <div className="Wholepage">
                <div className='Right-page'>
                    {
                        detail.filter((article) => { return article.category === "Bollywood" }).map((data) => (
                            <Card
                            key={data.id}
                                articleid={data.id}
                                imgUrl={data.Image}
                                title={data.title}
                                description={data.description.slice(0, 200)}
                              
                            />
                        ))
                    }
                </div>

                <div className="Left-page">
                    {
                        detail.filter((article) => { return article.category === "Bollywood" }).map((data) => (
                            <Smallcard
                            key={data.id}
                                articleid={data.id}
                                imgUrl={data.Image}
                                description={data.description.slice(0, 200)}
                                title={data.title.slice(0, 25)}
                             
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Bollywood