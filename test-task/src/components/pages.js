
import { connect } from "react-redux"
import { getApiResource } from "../reduser"
import { UserCard } from "./userCard"
import {Router, Link} from 'react-router-dom'
import { store } from "../reduser/store"



const Pages = ({ page}) => {

  if(page){
    const pages = Array.from({length:page.total_pages+1},(v,k)=>k)
    const zero=pages.shift()
    return(
      
      <div>
        
        <div className="user-card-wrapp">
            {page.data.map((user)=><UserCard 
            user={user}
            key={user.id} />
          )}
        </div>
        
          <div className="pages">
                {pages.map((p, index) => <Link to={`/=${p}`}
                  key={index}
                  className={p==page.page ? "current-page" :"page" }
                  onClick={()=>{
                    getApiResource(`https://reqres.in/api/users?page=${p}`)
                  }}
                >{p}</Link>)}
          </div>
        
      </div>
      
      
    )
    
  }else{
    return (
      
      <>Loading</>
    )
  }
  
}

export default connect(state => ({page: state.page }))(Pages)
