import { useCallback, useState } from "react";

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default () => {
  const [refresh, setRefresh] = useState(false);

  const onRefresh = useCallback(() => {
    setRefresh(true);
    wait(500).then(() => setRefresh(false));
  }, []);

  return { refresh, onRefresh };
};
