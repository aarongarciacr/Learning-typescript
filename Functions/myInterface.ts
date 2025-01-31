interface User {
  readonly id: number;
  name: string;
  userId: number;
  googleId?: number;
  //   startTrial: () => string;
  startTrial(): string;
}

let aaron: User = {
  id: 22,
  name: "aaron",
  userId: 1,
  startTrial: () => {
    return "trail started";
  },
};
