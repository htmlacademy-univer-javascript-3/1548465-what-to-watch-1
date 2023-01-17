import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      404 <br />
      Страница не найдена <br />
      <Link to='/'>
        Вернуться на главную
      </Link>
    </>
  );
}

export default NotFoundPage;
