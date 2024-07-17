import { useLocation, useNavigate } from "react-router-dom";

const useQuery = () => {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const params = new URLSearchParams(search);

  const setQueryParam = (key: string, value: string) => {
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
  
    navigate(`${pathname}?${params.toString()}`);
  };

  const getQueryParam = (key: string) => {
    return params.get(key) || "";
  };

  return { setQueryParam, getQueryParam };
};

export default useQuery;
