import React from "react"
import ButtonDesktop from "./ButtonDesktop"
import "./ExploreContainer.css"
interface ContainerProps {
    name: string
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <strong>{name}</strong>
            <p>
                Explore{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
                    UI Components
                </a>
            </p>
            <ButtonDesktop text="ButtonDesktop"/>
        </div>
    )
}

export default ExploreContainer
