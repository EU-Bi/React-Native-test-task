import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getApiResource } from "../reduser"

const FirstPage =({page})=>{
  if(page){
    const pages = Array.from({length:page.total_pages+1},(v,k)=>k)
    const zero=pages.shift()
    return(
      
      <div className="pages">
        <h1>Choose page</h1>
                  {pages.map((p, index) => <Link to={`/=${p}`}
                    key={index}
                    className="page"
                    onClick={()=>{
                      getApiResource(`https://reqres.in/api/users?page=${p}`)
                    }}
                  >{p}</Link>)}
            </div>
      )
  }else{
    return(
      <>Loading</>
    )
  }
  
}

export default connect(state => ({page: state.page }))(FirstPage)