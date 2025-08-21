import Keyboard from "../lib";
import "./css/BasicDemo.css";


class Demo {
  constructor() {

    /**
     * Demo Start
     */
    this.keyboard = new Keyboard({
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
    });

    /**
     * Update simple-keyboard when input is changed directly
     */
    document.querySelector(".input").addEventListener("input", event => {
      this.keyboard.setInput(event.target.value);
    });
  }

  onChange = (input) => {
    document.querySelector(".input").value = input;
    console.log("Input changed", input);
  }

  onKeyPress = (button, e) => {
    console.log("Button pressed", button, e);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") {
      this.handleShift();
      return;
    }

    if (button === "{numbers}") {
      this.handleNumbers();
      return;
    }

    if (button === "{abc}") {
      this.handleABC();
      return;
    }
  }

  onKeyReleased = (button, e) => {
    console.log("Button released", button, e);
  }

  handleShift = () => {
    const currentLayout = this.keyboard.options.layoutName;
    const shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  }

  handleNumbers = () => {
    const currentLayout = this.keyboard.options.layoutName;

    this.keyboard.setOptions({
      layoutName: "numbers"
    });
  }

  handleABC = () => {
    const currentLayout = this.keyboard.options.layoutName;

    this.keyboard.setOptions({
      layoutName: "default"
    });
  }
}

export default Demo;
