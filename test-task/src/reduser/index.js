import { showNextPage } from "./actions"
import { store } from "./store"




export async function  getApiResource (URL){
  const res= await fetch(URL)
  const body = await res.json()
  store.dispatch(showNextPage(body))
}

