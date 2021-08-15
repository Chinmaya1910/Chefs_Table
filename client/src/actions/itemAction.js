import axios from 'axios';
import { GET_ITEMS, ADD_ITEM,DELETE_ITEM,ITEMS_LOADING } from './types';
import {tokenConfig} from './authActions';

import {returnErrors} from './errorActions';


//getting data from backend
export const getItems=()=>dispatch=>{
    dispatch(setItemsLoading());
    axios
    .get('/api/recipes')
    .then(res=>
        dispatch({
            type:GET_ITEMS,
            payload:res.data
        }))
    .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)));
};


//delete item from backend
export const deleteItem = id=> (dispatch,getState) =>{
    axios.delete(`/api/recipes/${id}`,tokenConfig(getState))
    .then(res=>
        dispatch({
            type:DELETE_ITEM,
            payload:id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)));
};


//adding item to backend
export const addItem = item =>(dispatch,getState)=>{
   axios
   .post('/api/recipes',item,tokenConfig(getState))
   .then(res=>
    dispatch({
        type:ADD_ITEM,
        payload: res.data
    }))
    .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)));
};


export const setItemsLoading=()=>{
    return{
        type:ITEMS_LOADING
    }
}