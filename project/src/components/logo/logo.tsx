import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type LogoProps = {
  light?: boolean;
};

const Logo: FC<LogoProps> = (props) => {
  const { light } = props;
  return (
    <div className="logo">
      <Link to={'/'} className={`logo__link${light ? ' logo__link--light' : ''}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

export default Logo;
