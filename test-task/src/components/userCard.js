export const UserCard=({user})=>{
  return(
    <div className="user-card" >
        <img src={user.avatar}/>
        <h4>{user.first_name} {user.last_name}</h4>
        <a href={user.email}>{user.email}</a>
        
    </div>
  )
}