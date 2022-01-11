import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({course}) => {
    return(
        <div>
            <Header name={course.name}/>
            <ul>
                <Content  parts={(course.parts)}/>
            </ul>
            <Total parts={course.parts}/>
        </div>
    )
}





export default Course