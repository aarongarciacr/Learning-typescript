function identity<Type>(arg: Type): Type {
  //whatever type of value is pass as our argument is going to be the same as the type for our return
  return arg;
}

function identity2<T>(arg: T): T {
  return arg;
}

interface Bootle {
  brand: string;
  type: number;
}

identity2<Bootle>({ brand: "ice", type: 3 });
