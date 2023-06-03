function Typewriter(element, options) {
  var defaultOptions = {
    typingSpeed: 100,
    delay: 1000,
    cursor: "|", 
    cursorSpeed: 400,
  };

  this.element = element;
  this.textArray = JSON.parse(this.element.getAttribute("ty-text"));
  this.options = Object.assign({}, defaultOptions, options);
  this.currentIndex = 0;
  this.isDeleting = false;
  this.isPaused = false;
  this.typingSpeed = this.options.typingSpeed;
  this.cursorSpeed = this.options.cursorSpeed;

  this.init();
}

Typewriter.prototype.init = function () {
  this.currentText = this.textArray[this.currentIndex];
  this.element.innerHTML = "";
  this.toggleCursor();

  if (!this.isPaused) {
    this.start();
  }
};

Typewriter.prototype.start = function () {
  var self = this;

  if (!this.isPaused) {
    if (!this.isDeleting) {
      this.element.innerHTML = this.currentText.substring(
        0,
        this.element.innerHTML.length + 1
      );
      if (this.element.innerHTML === this.currentText) {
        this.isDeleting = true;
        this.typingSpeed = this.options.typingSpeed / 2;
        this.element.innerHTML += this.options.cursor; // Add cursor after text
      }
    } else {
      this.element.innerHTML = this.currentText.substring(
        0,
        this.element.innerHTML.length - 1
      );
      if (this.element.innerHTML === "") {
        this.isDeleting = false;
        this.currentIndex++;
        if (this.currentIndex === this.textArray.length) {
          this.currentIndex = 0; // Reset index to start over
        }
        this.currentText = this.textArray[this.currentIndex];
        this.typingSpeed = this.options.typingSpeed;
      }
    }

    setTimeout(function () {
      self.start();
    }, this.typingSpeed);
  }
};

Typewriter.prototype.toggleCursor = function () {
  var self = this;
  var cursorElement = document.createElement("span");
  cursorElement.className = "ty-cursor";
  cursorElement.innerText = this.options.cursor;

  this.element.parentNode.insertBefore(
    cursorElement,
    this.element.nextSibling
  );
};

Typewriter.prototype.pause = function () {
  this.isPaused = true;
};

Typewriter.prototype.resume = function () {
  this.isPaused = false;
  this.init();
};

var elements = document.querySelectorAll(".typewriter");

elements.forEach(function (element) {
  var options = {
    typingSpeed: parseInt(element.getAttribute("ty-typing-speed")) || 100,
    delay: parseInt(element.getAttribute("ty-delay")) || 1000,
    cursor: element.getAttribute("ty-cursor") || "|",
    cursorSpeed: parseInt(element.getAttribute("ty-cursor-speed")) || 400,
  };

  var typewriter = new Typewriter(element, options);
  typewriter.start();
});
