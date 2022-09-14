import {CURRENT_PAGE} from '../actions/index'



let initalState={
  page:null
}

const paginationReduser = (state=initalState, action)=>{
  switch(action.type){
    case CURRENT_PAGE:return {page:action.payload}    
  }
  return state
}
export {paginationReduser}