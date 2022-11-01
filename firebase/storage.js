import { getStorage } from 'firebase/storage';

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

export default storage;
