import { useEffect, useState } from 'react';

const url = import.meta.env.VITE_BACK_URL;



export function getevent({id}) {
    const num_id = Number(id)
    const cmd = `/api/event-data/${num_id}/?populate=*`;


    const [datas, setDatas] = useState("");

    useEffect(() => {
    fetch(url + cmd)
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => console.log(err));

    }, []);

  return datas.data;


}