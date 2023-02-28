<template>
    <div class="result">
        <div class="result1">
            <h1>Result V1</h1>
                <p>carBrand : {{ carService.carBrand }}</p>
                <p>zipCode : {{ carService.zipCode }}</p>
                <p>firstName : {{ carDesc.firstName }}</p>
                <p>lastName : {{ carDesc.lastName }}</p>
                <p>carModel : {{ carDesc.carModel }}</p>
                <p>firstRegistration : {{ carDesc.firstRegistration }}</p>
        </div>
        <div class="result2">
            <h1>Result V2</h1>
            <p>FullName : {{ carDesc.firstName + carDesc.lastName }}</p>
            <p>Car : {{ carDesc.carModel + carService.carBrand }}</p>
            <p>zipCode : {{ carService.zipCode }}</p>
            <p>firstRegistration : {{ carDesc.firstRegistration }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props : ['carService','carDesc'],
}
</script>