import { useRouteError } from 'react-router-dom';
import useTitle from '../../public/Scripts/useTitle';

function ErrorPage() {
    useTitle("ErrorPage")
    const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText && error.statusText }</i>
        <i>{error.message && error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage