'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { currentSession } from '@/app/utils/checkingAuthToken/authenication';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();

  // Define routes to exclude from ProtectedRoute
  const excludedRoutes = ['/components/Signin', '/components/Signup',"components/OtpVerification","/"];

  const isExcludedRoute = excludedRoutes.includes(pathname);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true); // Start loading state
      try {
        const session = await currentSession();
        const isValidSession = Boolean(
          session?.accessToken &&
          typeof session.accessToken === 'string' &&
          session.accessToken.trim() !== ''
        );

        if (isValidSession) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.push('/'); // Redirect to the homepage if not authenticated
        }
      } catch (error) {
        console.error('Error checking session:', error);
        setIsAuthenticated(false);
        router.push('/'); // Redirect on error
      } finally {
        setLoading(false); // End loading state
      }
    };

    if (!isExcludedRoute) {
      checkAuth();
    } else {
      setLoading(false); // If it's an excluded route, stop loading
    }
  }, [router, pathname, isExcludedRoute]);

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  return isAuthenticated || isExcludedRoute ? <>{children}</> : null; // Render children if authenticated or route is excluded
};

export default ProtectedRoute;
