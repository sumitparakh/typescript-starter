interface IApp {
  name: string;
}

abstract class AbsClass {
  showName() {
    console.log("This is abstract class method");
  }
}

class App extends AbsClass {
  private name: string;
  
  constructor(name?: string) {
    super();
    this.name = name;
    console.log("App's constructor");
    this.showName();
  }

  showName() {
    console.log("Custom implementation");
  }

  getName() {
    return this.name;
  }

  sayHello() {
    if (this.name) {
      console.log("Hello " + this.name);
      return this;
    }

    console.log("Hello World");
    return this;
  }

  appendToBody(str: string) {
    // if (document.body) {
    document.body.append(str);
    // }
  }
}

window.onload = () => {
  const app = new App("Sumit");
  app.sayHello();
  app.appendToBody(app.getName());
};
