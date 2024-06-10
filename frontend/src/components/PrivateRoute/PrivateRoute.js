// components/PrivateRoute.js
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const PrivateRoute = (WrappedComponent) => {
  const Component = (props) => {
    const router = useRouter();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Replace with your actual auth state

    React.useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return <>...Loading</>; // Or you can return a loading spinner here
    }

    return <WrappedComponent {...props} />;
  };

  return Component;
};

export default PrivateRoute;
