import { useDispatch, useSelector } from "react-redux"
import BlogCart from './BlogCart'
import { removeItem } from "../utils/blogSlice"


function CartPage(){

const blogItems=useSelector(store=>store.blog.items)
console.log(blogItems)

const dispatch=useDispatch()
const handleClearItem=()=>{
    dispatch(removeItem())
}
return(
    <>
<button onClick={()=>{
    handleClearItem()
}}>Clear Cart</button>

{
    blogItems.map((element,index)=><BlogCart {...element}/>)
}

    </>
)
}
export default CartPage