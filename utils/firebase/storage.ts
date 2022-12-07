import { getStorage, ref } from "firebase/storage";

const storage = getStorage();
const bibles = ref(storage, "bibles");

export { bibles };
