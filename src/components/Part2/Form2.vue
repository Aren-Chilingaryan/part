<template>
    <div id="form2" class="form2 input-inner">
        <div class="input-field">
            <span>firstName</span>
            <input name="firstName" type="text" v-model="carDesc.firstName" v-on:blur="isValid">
        </div>
        <div class="input-field">
            <span>lastName</span>
            <input name="lastName" type="text" v-model="carDesc.lastName" v-on:blur="isValid">
        </div>
        <div class="input-field">  
            <span>carModel</span>
            <input name="carModel" type="text" v-model="carDesc.carModel" v-on:blur="isValid">
        </div>
        <div class="input-field">
            <span>firstRegistration</span>
            <input name="firstRegistration" type="text" v-model="carDesc.firstRegistration" v-on:blur="isValid">
        </div>
    </div>
</template>

<script>
import {EventBus} from "../../event-bus";
export default {
    props : {
        carDesc : {
            type : Object,
        }
    },
    data(){
        return{

        }
    },
    methods : {
        isValid(e){
            EventBus.$emit('checkValid',{
                propertyName  : e.target.name,
                propertyValue : e.target._value
            });
        }
    }
}
</script>