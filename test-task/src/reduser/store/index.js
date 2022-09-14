import {createStore} from 'redux'
import { paginationReduser } from '../reduser/paginationReduser';

export let store = createStore(paginationReduser);
