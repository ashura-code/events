import { useEffect, useState } from 'react';

const url = import.meta.env.VITE_BACK_URL;
const cmd = '/api/event-data/?populate=*';

export function getevents() {
    const [datas, setDatas] = useState("");

    useEffect(() => {
    fetch(url + cmd)
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => console.log(err));

    }, []);

  return datas.data;


}
