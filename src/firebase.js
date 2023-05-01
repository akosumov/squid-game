import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {}

initializeApp(firebaseConfig)

export const db = getFirestore()
