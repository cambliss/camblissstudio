<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> master
import useGlobalContext from '@hooks/use-context';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useGlobalContext();

  useEffect(() => {
    if (!user?.email) {
      localStorage.setItem('redirectUrl', router.asPath);
      router.push('/login');
    }
  }, [user?.email, router]);

  return user?.email ? children : null;
};

<<<<<<< HEAD
=======
// Add PropTypes validation
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

>>>>>>> master
export default PrivateRoute;
