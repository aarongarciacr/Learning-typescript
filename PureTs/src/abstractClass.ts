abstract class TakePhoto {
  //An abstract class is just a blueprint to be use as an extension for other classes
  constructor(public cameraMode: string, public filter: string) {}
}

const aaron2 = new TakePhoto("test", "test"); // cannot create an instance of an abstract class

class Instagram2 extends TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }
}

const aaron3 = new Instagram2("test", "test");
