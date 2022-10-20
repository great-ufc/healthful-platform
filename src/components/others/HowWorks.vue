<template>
    <div class="media mb-4">
        <img :src="require('@/assets/images/wearable.png')" class="align-self-start mr-3 avatar-80" alt="blog-img">
        <div class="media-body">
            <h5 class="mt-0">Data Collection</h5>
            <p class="mb-0">Select data sources and frequency of questionnaires.</p>
        </div>
    </div>
    <div class="media mb-4">
        <img :src="require('@/assets/images/dashboard.png')" class="align-self-start mr-3 avatar-80" alt="blog-img">
        <div class="media-body">
            <h5 class="mt-0">Data Analysis</h5>
            <p class="mb-0">Use the Athena tool to analyze the data.</p>
        </div>
    </div>
    <div class="media mb-4">
        <img :src="require('@/assets/images/task.png')" class="align-self-start mr-3 avatar-80" alt="blog-img">
        <div class="media-body">
            <h5 class="mt-0">Intervention Plan</h5>
            <p class="mb-0">Create an intervention plan with the actions to be taken for each context.</p>
        </div>
    </div>
    <div class="media">
        <img :src="require('@/assets/images/recovery.png')" class="align-self-start mr-3 avatar-80" alt="blog-img">
        <div class="media-body">
            <h5 class="mt-0">Execution</h5>
            <p class="mb-0">The platform itself controls the execution.</p>
        </div>
    </div>
</template>