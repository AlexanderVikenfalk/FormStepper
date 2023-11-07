<script setup>
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";

function onComplete() {
  alert("Yay. Done!");
}
</script>

<template>
  <FormWizard @on-complete="onComplete" color="#094899" step-size="xs">
    <TabContent title="Introduction" icon="fa fa-user"/>
    <TabContent title="Basic information" icon="fa fa-gear"/>
    <TabContent title="Terms and conditions" icon="fa fa-city"/>
    <TabContent title="Profile" icon="fa fa-city"/>
  </FormWizard>
</template>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
</style>
