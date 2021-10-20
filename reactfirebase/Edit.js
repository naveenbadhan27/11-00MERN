import React,{useEffect, useState} from 'react';
import firebase from 'firebase';
import { db } from './firebase';


function Edit(){

    const [name, setName] = useState('');

    const query = window.location.search;
    const stringcheck = new URLSearchParams(query);
    const id = stringcheck.get('id');
    // console.log(id);

    function sub(){
        db.collection('Abc').doc(id).update({
            Name:name
        }).then(function(scc){
            alert('Yes');
        }).catch(function(err){
            alert('No');
        })
    }

    const [mydata, setMydata] = useState([]);

    function getdata(){
        db.collection('Abc').doc(id).get().then(function(succ){
            // console.log(succ.data().Name);
            setName(succ.data().Name);
        })
    }

    useEffect(() => {
        getdata();
    }, [])
    return(
		<div>
            <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
            <br/>
            <button onClick={sub}>Click</button>
            
		</div>
		)
}

export default Edit;