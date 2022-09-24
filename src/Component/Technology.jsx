import React, {useContext} from 'react'
import { store } from './Details'
import Card from './Card'
import Smallcard from './Smallcard';

export const Technology = () => {
  const [detail ] = useContext(store);
  return (
    <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Technology</h1>
            <h1 style={{ margin: "20px 0px 20px 38%", display: "inline-block" }}>Top Posts</h1>

            <div className="Wholepage">
            <div className='Right-page'>
                  {
                    detail.filter((article) =>{return article.category === "Technology"}).map((n)=>( <Card 
                      key={n.id}
                      articleid={n.id}
                      imgUrl = {n.Image}
                      description={n.description.slice(0, 200)}
                      title={n.title}

                      />))
                  }
            </div>
            <div className="Left-page">
                    {
                        detail.filter((article) => { return article.category === "Technology" }).map((n) => (
                            <Smallcard
                            key={n.id}
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                               
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

export default Technology