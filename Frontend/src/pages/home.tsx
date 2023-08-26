import React from 'react';
import ButtonComponent from '../components/Button';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <h1>ユースピカ（仮）</h1>
      <Link to="/create"><ButtonComponent text={"原稿を作成する"} /></Link>
    </>
    );
}

export default Home;
