<template>
    <div id="form1" class="form1 input-inner">
        <div class="input-field">
            <span>carBrand</span>
            <input name="carBrand" type="text" v-model="carService.carBrand" v-on:blur="isValid">
        </div>
        <div class="input-field">
            <span>zipCode</span>
            <input name="zipCode" type="number" v-model="carService.zipCode" v-on:blur="isValid">
        </div>
    </div>
</template>

<script>
import {EventBus} from "../../event-bus";
export default {
    props : {
        carService : {
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