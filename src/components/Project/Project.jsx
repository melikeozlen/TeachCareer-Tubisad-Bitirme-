import axios from 'axios'
import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
const Project = () => {
    const [myProject, setMyProject] = useState([])
    const getMyProject = async () => {
        const res = await axios.get("https://melikeozlen-portfolio.herokuapp.com/getproject/");
        setMyProject(res.data);
    }
    useEffect(() => {
        getMyProject();
    }, [])
    return (
        <div className='row w-100 d-flex p-4'>
            {myProject.map((project, index) => {
                return <div key={index} className="col-lg-3 col-md-6">
                    <ProjectCard data={project} />
                </div>


            })}
        </div>
    )
}

export default Project