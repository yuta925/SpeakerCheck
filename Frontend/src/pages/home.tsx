import React from 'react';
import ButtonComponent from '../components/Button';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <h1>ユースピカ（仮）</h1>
      <Link to="/create"><ButtonComponent text={"原稿を作成する"} /></Link><br></br>
      <Link to="/select"><ButtonComponent text={"採点開始"} /></Link><br></br>
      <Link to="/practice"><ButtonComponent text={"練習する"} /></Link><br></br>
    </>
    );
}

export default Home;
