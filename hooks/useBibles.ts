import { listAll } from "firebase/storage";
import { useState } from "react";
import { bibles } from "../utils/firebase/storage";

const listFiles = () => {
  const [files, setFiles] = useState<string[]>([]);

  listAll(bibles)
    .then((res) => {
      res.items.forEach((itemRef) => {
        setFiles((prev) => [...prev, itemRef.name]);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  return files;
};

export { listFiles };
