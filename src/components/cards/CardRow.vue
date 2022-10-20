<template>
    <div class="row">
        <div class="col-md-6 col-lg-3">
            <DashboardCard bodyClass="iq-bg-primary" iconColor="bg-primary" iconClass="ri-dashboard-line" counter="3" cardName="Loops"/>
        </div>
        <div class="col-md-6 col-lg-3">
            <DashboardCard bodyClass="iq-bg-info" iconColor="bg-info" iconClass="ri-group-fill" counter="21" cardName="Participants"/>
        </div>
        <div class="col-md-6 col-lg-3">
            <DashboardCard bodyClass="iq-bg-warning" iconColor="bg-warning" iconClass="ri-message-line" counter="269" cardName="Recommendations"/>
        </div>
        <div class="col-md-6 col-lg-3">
            <DashboardCard bodyClass="iq-bg-danger" iconColor="bg-danger" iconClass="ri-hospital-line" counter="0" cardName="Emergency"/>
        </div>
    </div>
</template>

<script setup>
    import DashboardCard from './DashboardCard.vue'
</script>