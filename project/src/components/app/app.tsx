import React from 'react';
import MainPage from '../../pages/main/main-page';

function App(): JSX.Element {
  return (
    <MainPage
      name={'The Grand Budapest Hotel'}
      genre={'Drama'}
      releaseYear={2014}
      imagePath={'img/bg-the-grand-budapest-hotel.jpg'}
    />
  );
}

export default App;
