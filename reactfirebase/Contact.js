import React,{useEffect, useState} from 'react';
import firebase from 'firebase';
import { db } from './firebase';


function Contact(){

    const [name, setName] = useState('');

    function sub(){
        db.collection('Abc').add({
            Name:name
        }).then(function(scc){
            alert('Yes');
        }).catch(function(err){
            alert('No');
        })
    }

    const [mydata, setMydata] = useState([]);

    function getdata(){
        db.collection('Abc').orderBy('Name','asc').limit(5).onSnapshot(function(succ){
            var ar = [];
            succ.forEach(function(succc){
                // console.log(succc.id);
                ar.push(succc);
            })
            // console.log(ar);
            setMydata(ar);
        })
    }

    function del(x){
        db.collection('Abc').doc(x).delete();
        getdata();
    }

    function edit(x){
        window.location.href="/Edit/?id="+x;
    }

    useEffect(() => {
        getdata();
    }, [])

    return(
		<div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <br/>
            <button onClick={sub}>Click</button>


            <ul>
                {mydata.map((abc) => (
                    <li>
                        {abc.data().Name} 
                        <button onClick={() =>del(abc.id)}>x</button>
                        <button onClick={() =>edit(abc.id)}>edit</button>
                    </li>
                ))}
            </ul>


		</div>
		)
}

export default Contact;