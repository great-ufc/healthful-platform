<template>
  <!-- Wrapper Start -->
      <div class="wrapper">
      <!-- Sidebar  -->
      <DashboardSidebar linkname="home"/>
      <!-- Page Content  -->
      <div id="content-page" class="content-page">
        <!-- TOP Nav Bar -->
        <DashboardHeader :username="username" :usergender="gender"/>
        <!-- TOP Nav Bar END -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <CardRow/>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8">
              <DashboardBlock blockTitle="List of all MAPE-K loops">
                <StripedTable :fields='tableFields' :tableData ="listAllLoops" caption="The Healthful platform uses the MAPE-K loop as 
                its primary abstraction model. So, users can create different models to deal with different problems. The models have 
                four phases: data collecting, data analysis, planning, and executing. Those who have the four phases properly configured 
                run the loop in an autonomous way."/>
              </DashboardBlock>
            </div>
            <div class="col-lg-4">
              <DashboardBlock blockTitle="How the platform works">
                <HowWorks/>
              </DashboardBlock>
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
  import DashboardBlock   from '@/components/cards/DashboardBlock.vue'
  import CardRow          from '@/components/cards/CardRow.vue'
  import StripedTable     from '@/components/tables/StripedTable.vue'
  import HowWorks         from '@/components/others/HowWorks.vue'

  export default {
    name: 'DashboardPage',
    components:{
    DashboardHeader,
    DashboardFooter,
    DashboardSidebar,
    DashboardBlock,
    CardRow,
    StripedTable,
    HowWorks,
},
    setup(){
      const listAllLoops = [
        {ID: "1", Name: "Fall risk", Description: "Loop to measure the risk of fall", Phase: "Executing"},
        {ID: "2", Name: "Gait analysis", Description: "Loop to analyze the gait of older people", Phase: "Data Analysis"},
        {ID: "3", Name: "QoL monitor", Description: "Loop to monitor people's QoL", Phase: "Data Collecting"},
      ]
      const tableFields = ['ID', 'Name', 'Description', 'Phase']
      const username = "Pedro Almir"
      const gender = "male"
      
      return {listAllLoops, tableFields, username, gender}
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
