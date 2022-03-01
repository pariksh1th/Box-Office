import React from 'react';
import Nav from './Nav';
import Title from './Title';

const MainPageLeyout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box - Office"
        subTitle="Right palce to look for movies and actors"
      />
      <Nav />
      <h1>{children}</h1>
    </div>
  );
};

export default MainPageLeyout;
