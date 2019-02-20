new Vue({
  el:'#vue-app',
  data:{
    available1: false,
    available2: false,
    available3: false,
    available4: false,
    available5: false,
    available6: false,
    quantity:6,
    pizzas:0,
    pieces:0,
    calories:0,
    guy:'img/g0.png'
  },

  methods:{
    bit:function(){
      var biteSound = new Audio("bitee.wav");
      biteSound.play();
      this.quantity-= 1;
      this.pieces+=1;
      this.calories+=60;
      console.log(this.quantity);

      if(this.quantity==0){
        this.pizzas+=1;
        console.log(`You've alreade eaten ${this.pizzas} pizzas ! Your're crazy`);

        switch (this.pizzas) {
          case 1: this.guy = ('img/g1.png');
            break;
          case 2: this.guy = ('img/g2.png');
            break;
          case 3: this.guy = ('img/g3.png');
            break;
          default:
            break;
        }
        if(this.pizzas<3){
          document.getElementById("visible").style.display = "inline";
        }
        else{
          document.getElementById("stop").style.display = "inline";
        }
      }
    },
    again:function(){
      if(this.pizzas<3){
        document.getElementById("visible").style.display = "none";
        this.available1 = !this.available1;
        this.available2 = !this.available2;
        this.available3 = !this.available3;
        this.available4 = !this.available4;
        this.available5 = !this.available5;
        this.available6 = !this.available6;
        this.quantity = 6;
      }
    },
    lose:function(){
      var biteSound = new Audio("pss.wav");
      biteSound.play();
      document.getElementById("lose").remove();
      this.guy = ('img/g0.png');
      document.getElementById("label").textContent="Thank you ! You're slim again :)"
    }
  }
});
