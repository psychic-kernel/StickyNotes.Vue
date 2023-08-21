<template>
    <form action="join.html" method="get">
        <div>
            <label for="email_1">Email Address:</label>
            <input type="text" id="email_1" name="email_1">
            <span>{{ errorText.email1 }}</span>
        </div>
        
        <div>
            <label for="email_2">Confirm Email Address:</label>
            <input type="text" id="email_2" name="email_2">
            <span>{{ errorText.email2 }}</span>
        </div>
        
        <div>
            <label for="first_name">First Name:</label>
            <input type="text" id="first_name" name="first_name">
            <span>{{ errorText.fname }}</span>
        </div>
                    
        <div>
            <label for="last_name">Last Name:</label>
            <input type="text" id="last_name" name="last_name">
            <span>{{ errorText.lname }}</span>
        </div>
                    
        <div>
            <label for="state">State</label>
            <input type="text" id="state" name="state">
            <span>{{ errorText.state }}</span>
        </div>
                                
        <div>
            <label for="zip_code">Zip Code:</label>
            <input type="text" id="zip_code" name="zip_code">
            <span>{{ errorText.zip }}</span>
        </div>
        <div>
            <label>&nbsp;</label>
            <!-- Submit -->
            <input type="submit" id="join_list" name="join_list" value="Join List"
            @submit.prevent="joinList()">
            <!-- Reset -->
            <input type="reset" id="reset" name="reset" value="Reset" @click="resetFields()">
        </div>
    </form>

</template>
<script>
import { ref, watch } from 'vue';

export default {
    setup(){
        let isValid = true;
        const errorMessage = "* This field is required";
        const emailPattern = /\b[A-Za-z0-9._%+-]+\.[A-Za-z]{2,4}\b/;

        const errorText = ref({
            email1: '',
            email2: '',
            fname: '',
            lname: '',
            state: '',
            zip: ''
        });
        watch(errorText, ()=> {
            if(errorText.email1.substring(0,3) !== ''){
                isValid = false;
            }
            if(errorText.email2.substring(0,3) !== ''){
                isValid = false;
            }
            if(errorText.fname.substring(0,3) !== ''){
                isValid = false;
            }
            if(errorText.email1.substring(0,3) !== ''){
                isValid = false;
            }
            if(errorText.email1.substring(0,3) !== ''){
                isValid = false;
            }
            else {
                isValid = true;
            }

        })

        const email1 = ref('');
        const email2 = ref('');
        const firstName = ref('');
        const lastName = ref('');
        const state = ref('');
        const zipCode = ref(0);

        const joinList = () => {
            
            email1 === '' ? 
            errorText.email1.value = errorMessage:
            '';
            !emailPattern.value.test(email1) ?
            errorText.email1.value = 'Not a valid email address':
            '';

            email2 === '' ?
            errorText.email2.value = errorMessage:
            '';
            !emailPattern.value.test(email2) ?
            errorText.email2.value = 'Not a valid email address':
            '';

            firstName === '' ?
            errorText.firstName.value = errorMessage:
            '';
            lastName === '' ?
            errorText.lastName.value = errorMessage:
            '';
            state === '' ?
            errorText.state.value = errorMessage:
            '';
            zipCode === '' ?
            errorText.zip.value = errorMessage:
            '';
            isNaN(zipCode) ?
            errorText.zip.value = '* Zipcode must be a series of numbers ex. 12345':
            '';
        }
        const resetFields = () => {
            email1.value = '';
            email2.value = '';
            firstName.value = '';
            lastName.value = '';
            state.value = '';
        }
        return { email1, email2, firstName, lastName, state, zipCode, errorText, joinList, resetFields};
    }
}
</script>
<style scoped>
form {
    background-color: var(--bg-color-nav);
    position: fixed;
    border-radius: 1em;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    color: var(--color-fire);
    width: 80%;
    height: 13em;
    float: left;
    box-shadow: 0px 0px 8px;
}
fieldset {
    position: relative;
    margin: auto;
    border-radius: 1em;
    margin-top: 1em;
    width: 92.5%;
    margin: auto;
    border: none;
}
label {
    position: relative;
    float: left;
    left: 5px;
    margin-top: 10px;

    
}
input {
    margin-left: 1em;
    margin-top: 1em;
    position: inherit;
    display: inline-block;
    border: none;
    border-radius: 5px;
    background-color: var(--bg-color-input);
}
input:focus{
    border: none;
}
button {
    position: inherit;
    background-color: transparent;
    color: var(--color-fire);
    border: none;
    box-shadow: 1px 1px 3px;
}
textarea {
    margin: 5px;
    background-color: var(--bg-color-input);
    border: none;
    border-radius: 5px;
    resize: none;
}

</style>
