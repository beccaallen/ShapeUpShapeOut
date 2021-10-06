window.addEventListener("DOMContentLoaded", function () {
  const addRectangleBtn = document.getElementById("button-addon-rectangle");
  const addSquareBtn = document.getElementById("button-addon-square");
  const addCircleBtn = document.getElementById("button-addon-circle");
  const addTriangleBtn = document.getElementById("button-addon-triangle");
  const sketchpad = document.querySelector(".sketchpad");
  const shapeInfo = document.querySelector(".shapeInfo");
  const widthInfo = document.querySelector(".widthInfo");
  const heightInfo = document.querySelector(".heightInfo");
  const radiusInfo = document.querySelector(".radiusInfo");
  const areaInfo = document.querySelector(".areaInfo");
  const perimeterInfo = document.querySelector(".perimeterInfo");

  addRectangleBtn.addEventListener("click", function () {
    let newRectangle = new Rectangle();
    newRectangle.render();
  });
  addSquareBtn.addEventListener("click", function () {
    let newSquare = new Square();
    newSquare.render();
  });
  addCircleBtn.addEventListener("click", function () {
    let newCircle = new Circle();
    newCircle.render();
  });
  addTriangleBtn.addEventListener("click", function () {
    let newTriangle = new Triangle();
    newTriangle.render();
  });

  class Shape {
    constructor(name, div) {
      this.name = name;
      this.div = div;
      this.div = document.createElement("div");
      this.div.style.top = Math.floor(Math.random() * 600) + "px";
      this.div.style.left = Math.floor(Math.random() * 600) + "px";
      sketchpad.appendChild(this.div);
      this.div.addEventListener("dblclick", () => this.div.remove())
    }
  }

  class Rectangle extends Shape {
    constructor(name, div) {
      super(name, div);
      this.height = document.querySelector(".heightInput").value;
      this.width = document.querySelector(".widthInput").value;
      this.div.addEventListener("click", () => this.describe());
    }
    render() {
      this.div.className = "rectangle";
      this.div.style.width = this.width + "px";
      this.div.style.height = this.height + "px";
    }
    describe() {
      let shapeName = this.div.className;
      shapeInfo.value = shapeName;
      let shapeWidth = this.width + "px" ;
      widthInfo.value = shapeWidth;
      let shapeHeight = this.height + "px";
      heightInfo.value = shapeHeight;
      let shapeRadius = "-";
      radiusInfo.value = shapeRadius;
      let shapeArea = this.width * this.height + "px";
      areaInfo.value = shapeArea;
      let shapePerimeter = this.width * 2 + this.height * 2 + "px";
      perimeterInfo.value = shapePerimeter;
    }
  }

  class Square extends Rectangle {
    constructor(name, div) {
      super(name, div);
      this.height = document.querySelector(".side-length").value;
      this.width = document.querySelector(".side-length").value;
    }
    render() {
      this.div.className = "square";
      this.div.style.width = this.width + "px";
      this.div.style.height = this.height + "px";
    }
  }

  class Circle extends Shape {
    constructor(name, div) {
      super(name, div);
      this.height = document.querySelector(".radius").value;
      this.width = document.querySelector(".radius").value;
      this.div.addEventListener("click", () => this.describe())
    }
    render() {
      this.div.className = "circle";
      this.div.style.width = this.width + "px";
      this.div.style.height = this.height + "px";
    }

    describe() {
      let shapeName = this.div.className;
      shapeInfo.value = shapeName;
      let shapeWidth = this.width * 2 + "px";
      widthInfo.value = shapeWidth;
      let shapeHeight = this.height * 2 + "px";
      heightInfo.value = shapeHeight;
      let shapeRadius = this.width + "px";
      radiusInfo.value = shapeRadius;
      let shapeArea = Math.floor(Math.PI * Math.pow((this.width), 2)) + "px";
      areaInfo.value = shapeArea;
      let shapePerimeter = Math.floor(2 * Math.PI * this.width) + "px";
      perimeterInfo.value = shapePerimeter;
    }
  }

  class Triangle extends Shape {
    constructor(name, div) {
      super(name, div);
      this.borderBottom = document.querySelector(".triHeight").value;
      this.borderRight = document.querySelector(".triHeight").value;
      this.div.addEventListener("click", ()=> this.describe())
    }
    render() {
      this.div.className = "triangle";
      this.div.style.borderBottom =
        this.borderBottom + "px solid rgba(244, 165, 96, 0.712)";
      this.div.style.borderRight = this.borderRight + "px solid transparent";
    }
    describe() {
        let shapeName = this.div.className;
        shapeInfo.value = shapeName;
        let shapeWidth = this.borderBottom + "px";
        widthInfo.value = shapeWidth;
        let shapeHeight = this.borderRight + "px";
        heightInfo.value = shapeHeight;
        let shapeRadius = "-";
        radiusInfo.value = shapeRadius;
        let shapeArea = ((this.borderBottom * this.borderRight)/2) + "px";
        areaInfo.value = shapeArea;
        let shapePerimeter = Math.floor(2 * this.borderRight + Math.pow(2,2) * this.borderRight) + "px";
        perimeterInfo.value = shapePerimeter;
      }
  }
});
