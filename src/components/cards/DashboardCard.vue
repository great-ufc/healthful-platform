<template>
    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
        <div class="iq-card-body rounded" :class="bodyClass">
            <div class="d-flex align-items-center justify-content-between">
            <div class="rounded-circle iq-card-icon" :class="iconColor"><i :class="iconClass"></i></div>
            <div class="text-right">                                 
                <h2 class="mb-0"><span class="counter">{{counter}}</span></h2>
                <h5 class="">{{cardName}}</h5>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            bodyClass: String,
            iconClass: String,
            counter: String,
            cardName: String,
            iconColor: String
        }
    }
</script>