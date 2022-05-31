import { useState, useEffect } from "react";

const useIsServerRender = () => {
  const [state, setState] = useState(true);

  useEffect(() => setState(false), []);

  return state;
};

export default useIsServerRender;
