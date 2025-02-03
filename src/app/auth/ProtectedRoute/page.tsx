"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { fetchAuthSession } from "aws-amplify/auth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const pathname = usePathname();

  const excludedRoutes = [
    "/auth/login",
    "/auth/signup",
    "/auth/OtpVerification",
    "/",
  ];

  const isExcludedRoute = excludedRoutes.includes(pathname);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      try {
        const session = await fetchAuthSession();
        const accessToken = session?.tokens?.accessToken ?? null;
        const idToken = session?.tokens?.idToken ?? null;

        const isValidSession = accessToken !== null && idToken !== null;

        if (isValidSession) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.push("/");
        }
      } catch (error: any) {
        if (error?.name === "NotAuthorizedException") {
          setMessage("You are not authorized to access this resource.");
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 3000); // Hide after 3s
        }

        setIsAuthenticated(false);
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    if (!isExcludedRoute) {
      checkAuth();
    } else {
      setLoading(false);
    }
  }, [router, pathname, isExcludedRoute]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isVisible && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md">
          {message}
        </div>
      )}
      {isAuthenticated || isExcludedRoute ? <>{children}</> : null}
    </>
  );
};

export default ProtectedRoute;
