function required(name){
    return {
        validator: (value) => value != '' && value !== undefined && value !== null,
        message : `A value is required for ${name}`
    }
}
function carBrand(){
    return {
        validator: (value) => {
            let reqBrand = ['Audi','BMW','Nissan'];
            return reqBrand.includes(value);
        },
        message : "brand or postal code is unfortunately not serviced"
    }
}
function zipCode(){
    return {
        validator: (value) => {
            let reqCode = [65000,66000,67000,68000];
            return reqCode.includes(Number(value));
        },
        message : "brand or postal code is unfortunately not serviced"
    }
}

export default {
    firstName : [required("firstName")],
    lastName : [required("lastName")],
    carModel : [required("carModel")],
    firstRegistration : [required("firstRegistration")],
    carBrand : [required("carBrand"),carBrand()],
    zipCode : [required("zipCode"),zipCode()]
}