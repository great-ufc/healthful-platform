<template>
    <!-- Wrapper Start -->
    <div class="wrapper">
        <!-- Sidebar  -->
        <DashboardSidebar linkname="editloop"/>
        <!-- Page Content  -->
        <div id="content-page" class="content-page">
            <!-- TOP Nav Bar -->
            <DashboardHeader :username="username" :usergender="gender"/>
            <!-- TOP Nav Bar END -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                    
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <DashboardFooter/>
            <!-- Footer END -->
        </div>
    </div>
        <!-- Wrapper END -->
</template>

<script>  
  import DashboardHeader  from '@/components/DashboardHeader.vue'
  import DashboardFooter  from '@/components/DashboardFooter.vue'
  import DashboardSidebar from '@/components/DashboardSidebar.vue'

  export default {
    name: 'DashboardPage',
    components:{
      DashboardHeader,
      DashboardFooter,
      DashboardSidebar,
    },
    setup(){
      const username = "Pedro Almir"
      const gender = "male"
      
      return {username, gender}
    },
    mounted: function () {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            window.performCustomOperations()
        })
    }
  }
</script>