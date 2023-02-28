<template>
  <div class="tasks">
    <h1>Task 1 - String Sort</h1>
    <p>
      <span>Input : </span>
      <input type="text" v-model="inputStr">
    </p>
    <h2>Input Array : {{ inputStr }}</h2>
    <h2>Output String : {{ outputStr }}</h2>
    <div class="btn" @click="sortString">Click</div> 
    <p v-if="!isValid">Incorrect String</p>
  </div>
</template>

<script>

export default {
  data(){
    return {
      inputStr : "g5et ski3lls on6 use1 your2 to4 7top",
      outputArr : [],
      outputStr : "",
      isValid : true
    }
  },
  methods : {
    sortString(){
      this.outputStr = "";
      this.outputArr = [];
      this.isValid = true;
      if(!this.inputStr) return;
      this.inputStr.split(" ").forEach((item) => {
        // Checking if word in valid i.e it contains digit >0 and <=9
        if(! /(\d+)/.test(item) || item.match(/(\d+)/)[0]<=0 || item.match(/(\d+)/)[0]>9) {
          this.isValid = false;
          return;
        }
        this.outputArr.push({
          val : item.match(/(\d+)/)[0],
          text : item
        });
      })
      if(!this.isValid) return;
      this.outputArr.sort((a,b) => {
        return a.val - b.val;
      }) 
      for(let i=0;i<this.outputArr.length;i++)
      {
        this.outputStr += this.outputArr[i].text;
        this.outputStr += (i<this.outputArr.length-1) ? " " : "";
      }
    }
  }
}
</script>