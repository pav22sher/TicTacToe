Vue.component("box", {
  template: `<input type="button"/>`
});

new Vue({
  el: "#main",
  data: {
    boxes: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: ""
    },
    player: "O",
    winplayer: "",
    wincombination: "",
    gameover: false,
    movecol: 0
  },
  methods: {
    move: function(event) {
      this.movecol++;
      event.target.value = this.player;
      event.target.disabled = true;
      this.boxes[event.target.id] = this.player;
      this.check();
      if (this.gameover) {
        this.changeButton();
      }
      this.player = this.player === "O" ? "X" : "O";
    },
    check: function() {
      if (
        this.boxes[1] === this.player &&
        this.boxes[2] === this.player &&
        this.boxes[3] === this.player
      ) {
        this.gameover = true;
        this.winplayer = this.playe;
        this.wincombination = "123";
      } else if (
        this.boxes[4] === this.player &&
        this.boxes[5] === this.player &&
        this.boxes[6] === this.player
      ) {
        this.gameover = true;
        this.winplayer = this.player;
        this.wincombination = "456";
      } else if (
        this.boxes[7] === this.player &&
        this.boxes[8] === this.player &&
        this.boxes[9] === this.player
      ) {
        this.gameover = true;
        this.winplayer = this.player;
        this.wincombination = "789";
      } else if (
        this.boxes[1] === this.player &&
        this.boxes[4] === this.player &&
        this.boxes[7] === this.player
      ) {
        this.gameover = true;
        this.winplayer = this.player;
        this.wincombination = "147";
      } else if (
        this.boxes[2] === this.player &&
        this.boxes[5] === this.player &&
        this.boxes[8] === this.player
      ) {
        this.gameover = true;
        this.winplayer = this.player;
        this.wincombination = "258";
      } else if (
        this.boxes[3] === this.player &&
        this.boxes[6] === this.player &&
        this.boxes[9] === this.player
      ) {
        this.gameover = true;
        this.winplayer = this.player;
        this.wincombination = "369";
      } else if (
        this.boxes[1] === this.player &&
        this.boxes[5] === this.player &&
        this.boxes[9] === this.player
      ) {
        this.gameover = true;
        this.winplayer = this.player;
        this.wincombination = "159";
      } else if (
        this.boxes[3] === this.player &&
        this.boxes[5] === this.player &&
        this.boxes[7] === this.player
      ) {
        this.gameover = true;
        this.winplayer = this.player;
        this.wincombination = "357";
      } else if (this.movecol === 9) {
        this.gameover = true;
        this.winplayer = "X O";
      }
    },
    changeButton: function() {
      for (let i = 1; i < 10; i++) {
        let ibox = document.getElementById(i);
        ibox.disabled = true;
        if (this.wincombination.includes(i)) {
          ibox.style.background = "red";
        }
      }
    },
    restart: function() {
      this.boxes = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: ""
      };
      this.player = "O";
      this.winplayer = "";
      this.wincombination = "";
      this.gameover = false;
      this.movecol = 0;
      for (let i = 1; i < 10; i++) {
        let ibox = document.getElementById(i);
        ibox.value = "";
        ibox.disabled = false;
        ibox.style.background = "#808080";
      }
    }
  }
});
