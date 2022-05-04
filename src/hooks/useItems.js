import { useEffect, useState } from "react";

const useItems = (id) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://intense-castle-01868.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return [item, setItem];
};

export default useItems;
