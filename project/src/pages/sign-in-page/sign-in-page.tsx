import React, { FC, FormEvent, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../types/authorization/authorization-status.enum';
import { ROUTES } from '../../constants/routes';
import { loginAction } from '../../store/api-action';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { getAuthorizationStatus } from '../../store/reducer/user/user-selector';
import { AuthorizationResponse } from '../../types/authorization/authorization-response';

const SignInPage: FC = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const [isError, setIsError] = useState<boolean>(false);
  const isSignInMessage = false;
  const isValidPassword = (password: string): boolean => /\d+[a-zA-Z]+|[a-zA-Z]+\d+/.test(password);

  if (authorizationStatus === AuthorizationStatus.Auth){
    navigate(ROUTES.MAIN);
  }

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthorizationResponse) => {
    dispatch(loginAction(authData))
      .then(() => navigate(ROUTES.MAIN))
      .catch(() => setIsError(true));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && isValidPassword(String(passwordRef.current?.value))) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value
      });
    } else {
      setIsError(true);
    }
  };
  return (
    <div className="user-page">

      <Header/>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
          <div className="sign-in__message">
            <div className="sign-in__message">
              {(
                () => {
                  if (isError) {
                    return (<p>Invalid email and password</p>);
                  } else if (isSignInMessage) {
                    return (<p>Can&apost find this user</p>);
                  }
                })()}
            </div>
          </div>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default SignInPage;
