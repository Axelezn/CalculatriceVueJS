new Vue({
  // Déclaration de l'instance Vue
  el: "#app",
  data: {
    // Data
    answer: "",
    current: "",
    clicked: true,
    log: "",
  },
  methods: {
    BtnClick(value) {
      if (this.clicked) {
        this.current = "";
        this.clicked = false;
      }
      this.current = `${this.current}${value}`;
    },
    clear() {
      this.answer = "";
      this.current = "";
      this.answer = "";
      this.clicked = true;
      this.log = "";
    },
    changeSigne() {
      if (this.current !== "") {
        if (this.current.charAt(0) === "-") {
          this.current = this.current.slice(1);
        } else {
          this.current = `-${this.current}`;
        }
      }
    },
    toPercent() {
      if (this.current != "") {
        this.current = `${parseFloat(this.current) / 100}`;
      }
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.current = `${this.current}.`;
      }
    },
  },
});
