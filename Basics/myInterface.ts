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

interface User {
  githubId: string;
}

let aaron2: User = {
  id: 22,
  name: "aaron",
  userId: 1,
  startTrial: () => {
    return "trail started";
  },
  githubId: "fjgvhjbn",
};

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

let aaron3: Admin = {
  id: 22,
  name: "aaron",
  userId: 1,
  startTrial: () => {
    return "trail started";
  },
  githubId: "ghjbkn",
  role: "admin",
};
