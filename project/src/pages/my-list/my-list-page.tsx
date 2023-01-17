import React from 'react';
import Header from '../../components/header/header';
import FilmCard from '../../components/film-card/film-card';
import { Footer } from '../../components/footer/footer';

export default function MyListPage() {return (
  <div className='user-page'>
    <Header />
    <section className='catalog'>
      <h2 className='catalog__title visually-hidden'>Catalog</h2>
      <div className='catalog__films-list'>
        <FilmCard
          name={'Fantastic Beasts: The Crimes of Grindelwald'}
          imagePath={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}
        />

        <FilmCard
          name={'Bohemian Rhapsody'}
          imagePath={'img/bohemian-rhapsody.jpg'}
        />

        <FilmCard
          name={'Macbeth'}
          imagePath={'img/macbeth.jpg'}
        />

        <FilmCard
          name={'Aviator'}
          imagePath={'img/aviator.jpg'}
        />

        <FilmCard
          name={'We need to talk about Kevin'}
          imagePath={'img/we-need-to-talk-about-kevin.jpg'}
        />

        <FilmCard
          name={'What We Do in the Shadows'}
          imagePath={'img/what-we-do-in-the-shadows.jpg'}
        />

        <FilmCard
          name={'Revenant'}
          imagePath={'img/revenant.jpg'}
        />

        <FilmCard
          name={'Johnny English'}
          imagePath={'img/johnny-english.jpg'}
        />

        <FilmCard
          name={'Shutter Island'}
          imagePath={'img/shutter-island.jpg'}
        />
      </div>
    </section>
    <Footer />
  </div>
);
}
