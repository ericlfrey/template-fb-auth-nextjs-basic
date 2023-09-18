import { useAuth } from '@/utils/context/AuthContext';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    console.log('loading:', loading);
    console.log('user:', user);
    const checkAuthentication = async () => {
      if (!loading) {
        if (!user?.uid) {
          await router.push('/login');
        }
      }
    };

    checkAuthentication();
  }, [router, user, loading]);

  if (loading) {
    // You can add a loading spinner or some other UI indication here
    return <div>Loading...</div>;
  }

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
