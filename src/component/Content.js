import Part from "./Part";

const Content = ({parts}) => {
    return (
            parts.map((name, id) => <Part  part={name} key={id}/>)
    )

}

export default Content