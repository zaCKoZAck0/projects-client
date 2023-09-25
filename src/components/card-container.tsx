import { useEffect, useState } from "react";
import ProjectCard from "./project_card"
import {ProjectCards} from '../types/Projects'
import { useLocation } from "react-router-dom";
import AIPrompt from "./ai-prompt";


function CardContainer() {
    const [projects, setProjects] = useState<ProjectCards[]>([])
    const location = useLocation();
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState<string | null>(null)
    useEffect(()=>{
        const endpoint = location.search!==''?`filter/${location.search}`:"projects";

        setLoading(true)
        setProjects([])

        
        fetch(`https://projects-service.onrender.com/api/${endpoint}`)
        .then(response => {
        if (!response.ok) {
        throw new Error('Internal Server Error');
        }
        return response.json(); 
        })
        .then(data => {
        data.projects?
        setProjects(data.projects):
        setProjects(data)

        data.message?
        setMessage(data.message):
        setMessage(null)

        setLoading(false)
        })
        .catch(error => {
        console.error('Fetch error:', error);
        setLoading(false)
        });
    }, [location.search])
    if(projects.length === 0){
        return(
            <div style={{paddingTop: "80px", paddingBottom: "80px", minHeight:"100vh"}} className="container">
                <AIPrompt message={message} length={projects.length} />
                <div className="display-1 text-center">{loading?"Loading...":"Nothing to Display"}</div>
                <div className="text-center">{loading?"May take some time⏳, please wait!":"Try another Query!"}</div>
            </div>
        )
    }
    return(
        <div style={{paddingTop: "80px", paddingBottom: "80px", minHeight:"100vh"}}>
                <AIPrompt message={message} length={projects.length} />
        <div className="row container d-flex gap-4 justify-content-around">
            {
                projects.map(props=><ProjectCard key={props.id} {...props}  />)
            }
            
        </div>
        </div>
    )
}

export default CardContainer;
