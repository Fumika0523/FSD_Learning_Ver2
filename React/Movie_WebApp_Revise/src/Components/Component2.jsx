import { useParams } from "react-router-dom"

function Component2(){
    const{componentId} = useParams();
    console.log(componentId);
    return(
        <>
        <div>Component</div>
        </>
    )
}
export default Component2