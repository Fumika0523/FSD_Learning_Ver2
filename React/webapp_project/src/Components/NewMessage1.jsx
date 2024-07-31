import NewMessage2 from './NewMessage2'

function NewMessage1({name,age,contactNum}){
    return(
        <>
        <NewMessage2 name={name} age={age} contactNum={contactNum}/>
        </>
    )
}
export default NewMessage1