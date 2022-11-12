import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - MOM'S KITCHEN`;
  }, [title]);
};

export default useTitle;
