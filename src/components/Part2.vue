<template>
    <div class="form-wrapper">
        <h1 class="heading">SignUp Form</h1>
        <div class="form-wrapper-inner">   
            <div class="top-section">
                <Form1 v-if="formLevel == 1" :carService="carService"/>
                <Form2 v-if="formLevel == 2" :carDesc="carDesc"/>
                <div class="load-animation" id="anValue"></div>
                <Result v-if="formLevel == 3" :carService="carService" :carDesc="carDesc" />
            </div>
            <div class="bottom-section" v-if="formLevel!=0">
                <button class="prev-btn btn" v-if="formLevel>1" @click="formLevel--">Back</button>
                <button class="next-btn btn" v-if="formLevel<3" @click="validateAll" >Next</button>
            </div>
            <div class="popup" v-if="validationError">
                    <p >{{ validationError }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import Form1 from "./Part2/Form1.vue";
import Form2 from "./Part2/Form2.vue";
import Result from "./Part2/Result.vue";
import validation from "../validation";
import Vue from "vue";
import {EventBus} from "../event-bus";
export default {
    components : {
        Form1,
        Form2,
        Result
    },
    data(){
        return {
            carService : {},
            carDesc : {},
            formLevel : 1,
            validationError: ""
        }
    },
    created(){
        EventBus.$on("checkValid",(props)=>{
            this.validateWatch(props.propertyName,props.propertyValue);
        });
    },
    methods : {
        validateWatch(propertyName,value) {
            let error = "";
            Object(validation)[propertyName].forEach( v => {
                if(!v.validator(value) && error == ""){
                    error = v.message;
                }
            })
            this.validationError = error;
            return error !== '';
        },
        validateAll(){
            if(this.formLevel == 1){
                if(this.validateWatch("carBrand",this.carService.carBrand)) return;
                if(this.validateWatch("zipCode",this.carService.zipCode)) return;
            }else if(this.formLevel == 2){
                if(this.validateWatch("firstName",this.carDesc.firstName)) return;
                if(this.validateWatch("lastName",this.carDesc.lastName)) return;
                if(this.validateWatch("carModel",this.carDesc.carModel)) return;
                if(this.validateWatch("firstRegistration",this.carDesc.firstRegistration)) return;
            }
            if(this.validationError == '')
                    {
                        if(this.formLevel == 2){
                            this.formLevel = 0;
                            this.showResult();
                        }else{
                            this.formLevel++;
                        }
                    }
        },
        animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
                if (progress < 1) {
                window.requestAnimationFrame(step);
                }
                if(obj.innerHTML == "100%")
                    {
                        obj.classList.remove('show');
                        this.formLevel = 3;
                    }
            };
            window.requestAnimationFrame(step);
        },
        showResult(){
            const obj = document.getElementById("anValue");
            obj.classList.add('show');
            this.animateValue(obj, 0, 100, 6000);
        }
    }
}
</script>

<style lang="scss">
    @import "../css/Part2.scss";
    @import "../css/loading-animation.scss";
</style>