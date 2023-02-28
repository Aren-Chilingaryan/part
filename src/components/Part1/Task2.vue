<template>
    <div class="tasks">
        <h1>Task 2 - Queue at the supermarket</h1>
        <div>
            <span>Enter Customers waiting time : </span>
            <input type="text" v-model="customers">
        </div>
        <div>
            <span>No. of Cash Registers : </span>
            <input type="number" v-model="cashReg">
        </div>
        <h2>Total Time : {{ totalTime }}</h2>
        <div class="btn" @click="requiredTime(customers,cashReg)">Click</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            customers : "34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47",
            cashReg : 4,
            totalTime:"",
        }
    },
    methods : {
        requiredTime(customers,cashReg){
            cashReg = Number(cashReg);
            if(!customers){
                this.totalTime = 0;
                return;
            };
            if(!cashReg) {
                this.totalTime = "Infinite";
                return;
            }
            let customerArr = [];
            customers.split(',').forEach((item) => {
                customerArr.push(Number(item));
            });

            let cashRegArr = Array(cashReg).fill(0);
            for(let customer of customerArr){
                let minReg = cashRegArr.indexOf(Math.min(...cashRegArr));
                cashRegArr[minReg] += customer;
            }
            this.totalTime = Math.max(...cashRegArr);
        }
    }
}
</script>