import { locationCategoriesRef } from './firestore';
import { getDocs } from 'firebase/firestore';

// get collection data
const getLocationCategories = async () => {
  const locations = [];

  await getDocs(locationCategoriesRef)
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

export default getLocationCategories();
