import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const withSpinner = (WrappedComponent, getData) => {
  return () => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});
    const { productId } = useParams();
    useEffect(() => {
      getData(productId)
        .then((d) => {
          setData(d.data);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => setLoading(false));
    }, [productId]);
    if (isLoading) {
      return <p>...loading</p>;
    }
    if (error) {
      return <p> oh there is an error</p>;
    } else {
      return <WrappedComponent data={data} />;
    }
  };
};

export default withSpinner;
