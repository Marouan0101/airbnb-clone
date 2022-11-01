import { locationsRef } from './firestore';
import { getDocs } from 'firebase/firestore';

// get collection data
const getLocations = async () => {
  const locations = [];

  await getDocs(locationsRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        locations.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((err) => {
      console.log(err.message);
    });

  return locations;
};

export default getLocations();
