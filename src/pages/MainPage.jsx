import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import axios from 'axios';
import Feed from '../components/Feed';

function MainPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      axios.get('/data/data.json').then((res) => {
        setData(res.data.result);

        return;
      });
    } catch (error) {
      return error;
    }
  }, []);
  return (
    <>
      <Nav />
      {data.map((el) => (
        <Feed {...el} key={el.id} />
      ))}
    </>
  );
}

export default MainPage;
