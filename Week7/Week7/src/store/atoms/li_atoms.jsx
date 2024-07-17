import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
  key: "notifications",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      //await new Promise(r => setTimeout(r, 5000)); // it is used to create a delay knowingly
      try {
        const response = await axios.get("https://sum-server.100xdevs.com/notifications");
        return response.data || {};  // Ensure it returns an empty object if data is undefined or null
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
        return {};  // Return an empty object in case of error
      }
    },
  }),
});

export const total = selector({
  key: "total",
  get: ({ get }) => {
    const allnotifications = get(notifications);
    // Check if allnotifications is an object and has values
    if (allnotifications && typeof allnotifications === 'object') {
      return Object.values(allnotifications).reduce((acc, curr) => acc + curr, 0);
    }
    return 0;  // Return 0 if allnotifications is not an object or has no values
  },
});
