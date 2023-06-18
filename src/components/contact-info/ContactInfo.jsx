import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function ContactInfo() {
   const  API_URL = "https://random-data-api.com/api/v2/users?";


  let { id } = useParams();

 const [info, setInfo] = useState();


  useEffect(() => {
    const url = API_URL + "?size = 10"
    fetch(API_URL)
        .then(data => data.json())
        .then(data => setInfo(data));
    }, []);

  if (info) {
    return (


      <div>
        <p>{info.first_name}</p>
      </div>
    )
  }

  else {
    return <p>Data is being fetched...</p>
  }

}
