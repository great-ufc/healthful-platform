<template>
    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
        <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
                <h4 class="card-title">{{blockTitle}}</h4>
            </div>
        </div>
        <div class="iq-card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            blockTitle: String
        }
    }
</script>