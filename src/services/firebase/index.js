import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { FirebaseConfig } from "../../config/firebase-config";

const app = initializeApp(FirebaseConfig);
const analytics = getAnalytics(app);

export const logAnalyticsEvent = (eventName) => {
  logEvent(analytics, eventName);
};
