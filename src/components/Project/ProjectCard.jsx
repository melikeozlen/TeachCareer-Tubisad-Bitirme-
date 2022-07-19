import React, { useState } from 'react'
import './Project.scss'
const ProjectCard = ({ data }) => {
    const [tags, setTags] = useState(data.tag);
    return (
        <div>
            {data ?
                <div className="card" style={{ marginLeft: "1rem", marginBottom: "2rem" }}>
                    <img src={data.img_url} alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-dark">{data.title[0]}</h5>
                        <div className='d-flex gap-1' style={{flexWrap:"wrap"}}>
                            {
                                tags.map((tag) => {
                                    return <span className="card-subtitle mb-2 text-light p-1" style={{ fontSize: "0.75rem", backgroundColor:"blue", borderRadius:"10px"}} >{tag}</span>
                            })

                            }
                        </div>
                        <p className="card-text text-dark">{data.description[0]}</p>
                        <a href={data.project_url} className="card-link text-primary" >Github link</a>
                    </div>
                </div>
                :
                <p>loding</p>
            }
        </div>
    )
}

export default ProjectCard