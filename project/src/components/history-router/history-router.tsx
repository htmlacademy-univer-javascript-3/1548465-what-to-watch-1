import React, { useState, useLayoutEffect, FC, ReactNode } from 'react';
import { Router } from 'react-router-dom';
import type { BrowserHistory } from 'history';

type Props = {
  history: BrowserHistory;
  basename?: string;
  children?: ReactNode;
}

const HistoryRouter: FC<Props> = (props) => {
  const { history, basename, children } = props;
  const [state, setState] = useState({ action: history.action, location: history.location });
  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};

export default HistoryRouter;
