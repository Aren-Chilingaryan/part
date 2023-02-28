<template>
    <div class="tasks">
        <h1>Task 3 - Next bigger number</h1>
        <p>
            <span>Input : </span>
            <input type="number" v-model="givenNum">
        </p>
        <h2>Output : {{ biggerNum }}</h2>
        <div class="btn" @click="getBiggerNum(givenNum)">Click</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            givenNum : 0,  
            biggerNum : ""     
        }
    },
    methods : {

        getBiggerNum(givenNum){
           givenNum = Number(givenNum);
           let digitArr = this.getArrayFromDigit(givenNum);
           digitArr.sort((a,b) => {
            return b - a;
           });
           let tempVal = Number(digitArr.join(''));
           if(givenNum == tempVal || givenNum > tempVal){
                this.biggerNum = -1;
           }else{
                this.biggerNum = tempVal;
           }

        },
        getArrayFromDigit(givenNum){
            let digitArr = [];
            while(givenNum>=1){
                digitArr.push(Math.floor(givenNum%10));
                givenNum /= 10;
            }
            return digitArr;
        }
    }
}
</script>