import React from "react"
import { getFirebase } from "./firebase"

export const useThemesOnce = async function useThemes() {
  const { firestore } = await getFirebase()
  const querySnapshot = await firestore.collection("themes").get()
  return querySnapshot.docs
}

export const useThemesOnSnapshot = async function useThemes(setThemes) {
  const { firestore } = await getFirebase()
  return firestore.collection("themes").onSnapshot(querySnapshot => {
    setThemes(querySnapshot.docs)
  })
}
