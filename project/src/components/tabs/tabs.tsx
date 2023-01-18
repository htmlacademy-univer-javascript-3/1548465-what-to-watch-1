import { Film } from '../../types/film.type';
import { FC, useState } from 'react';
import FilmTabItem from './tabs-item';
import FilmDetailsTab from './film-details-tab/film-details-tab';
import FilmOverviewTab from './film-overview-tab/film-overview-tab';
import FilmReviewsTab from './film-review-tab/film-review-tab';
import { Review } from '../../types/review.type';
import { TABS } from '../../constants/tabs';

type TabsProps = {
  film: Film;
  reviews: Review[];
}

const Tabs: FC<TabsProps> = (props) => {
  const { film, reviews } = props;
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            TABS
              .map((tabName) =>
                (
                  <FilmTabItem
                    key={tabName}
                    name={tabName}
                    isActive={tabName === activeTab}
                    onClick={handleTabClick}
                  />
                )
              )
          }
        </ul>
      </nav>

      {activeTab === 'Reviews' && <FilmReviewsTab reviews={reviews}/>}
      {activeTab === 'Overview' && <FilmOverviewTab film={film}/>}
      {activeTab === 'Details' && <FilmDetailsTab film={film}/>}
    </div>
  );
};
export default Tabs;
