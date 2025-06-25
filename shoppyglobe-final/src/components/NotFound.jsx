import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default NotFound;
