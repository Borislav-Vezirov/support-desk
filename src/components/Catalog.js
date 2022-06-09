import { useEffect, useState } from 'react';
import PersonCard from './PersonCard.js';


function Catalog(){

    let [data, setData] = useState([]);

    let keyIndex = 1;

    useEffect(()=> {

        fetch('../assets/api.json')
            .then(res => res.json())
            .then(result => setData(result))
            .catch(err => console.log('Error' + err))
    }, []);

    return (
        <div className='wrapper'>
            {data.length > 0 
                ? data.map(x => <PersonCard key={keyIndex++} person={x} />)
                : <h3 className="no-people">No persons to show.</h3> 
            }
        </div>
    )
}

export default Catalog;