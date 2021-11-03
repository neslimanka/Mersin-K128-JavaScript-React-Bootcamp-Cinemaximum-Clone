import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useEffect} from 'react';
import {fetchCharacters} from '../../redux/slice/charactersSlice';



 function Cinema1() {
 const data=useSelector((state) => state.characters);
 const dispatch = useDispatch();

 useEffect(() => {
     dispatch(fetchCharacters())
 },[dispatch]);


 console.log(data)


    return (
        <div>
            Cinema1
        </div>
    )
}
export default Cinema1;