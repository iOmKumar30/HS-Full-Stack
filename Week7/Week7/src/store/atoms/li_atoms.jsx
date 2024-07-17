import { atom, selector } from "recoil";
export const networkAtom = atom({
  key: "network",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobs",
  default: 3,
});

export const notifications = atom({
  key: "notifications",
  default: 12,
});

export const messages = atom({
  key: "messages",
  default: 13,
});

export const total = selector({
  key: "total",
  get: ({ get }) => {
    return (
      get(networkAtom) + get(jobsAtom) + get(notifications) + get(messages)
    );
  },
});
