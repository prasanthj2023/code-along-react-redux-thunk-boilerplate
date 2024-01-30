import { applyMiddleware, createStore } from "redux";
import reducer from "./Reducer";
import { thunk } from "redux-thunk";
import axios from "axios";
import { fetchData,fetchError } from "./Action";
import { useState } from "react";

const store = createStore(reducer, applyMiddleware(thunk));

function fetchurl(){
    return function(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            const users = res.data;
            store.dispatch(fetchData(users));
        })
        .catch((err)=>{
            store.dispatch(fetchError(err.message))})

    }
}

export default function Home(){
    const [data,setdata] = useState([]);

    store.subscribe(() =>{
        setdata(store.getState().data);
    })

    return(
        <>
            {data.map((items)=>(
                <div className="data" key={items.id}>
                    <h3>
                        {items.name}
                    </h3>
                    <h5>
                        {items.email}
                    </h5>
                    <hr />
                </div>
            ))}
            <button onClick={()=>store.dispatch(fetchurl())} >Get Data </button>
        </>
    )
}