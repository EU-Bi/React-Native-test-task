
import { connect } from "react-redux"
import { getApiResource } from "../reduser"
import { UserCard } from "./userCard"



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
              {pages.map((p, index) => <span
                key={index}
                className={p==page.page ? "current-page" :"page" }
                onClick={()=>{
                  getApiResource(`https://reqres.in/api/users?page=${p}`)
                }}
              >{p}</span>)}
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
