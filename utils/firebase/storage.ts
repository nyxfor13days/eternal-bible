import { app } from "./index";
import { getStorage, ref } from "firebase/storage";

const storage = getStorage(app);
const bibles = ref(storage, "gs://eternal-bible.appspot.com/bibles");

export { bibles };
