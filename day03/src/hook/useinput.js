import { useCallback, useState } from "react";

export const useInput = (intialValue = null) => {
  const [value, setValue] = useState(intialValue);
  const change = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, change];
};
