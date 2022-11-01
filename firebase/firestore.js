import config from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';

// init firebase app
initializeApp(config);

// init services
const db = getFirestore();

// collection ref
const locationsRef = collection(db, 'locations');
const locationCategoriesRef = collection(db, 'location categories');

export { locationsRef, locationCategoriesRef };
