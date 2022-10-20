<template>
    <p>{{ caption }}</p>
    <div class="table-resposive">
        <table class="table mb-0 table-striped">
            <thead>
                <tr>
                    <!-- Loop through each value of the fields to get the table header -->
                    <th scope="col" v-for="field in fields" :key='field'>{{field}}</th>
                </tr>
            </thead>
            <tbody>
                <!-- Loop through the list get the each student data -->
                <tr v-for="item in tableData" :key='item'>
                    <td v-for="field in fields" :key='field'>{{item[field]}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
    name: 'StripedTable',
    props:{
        caption: String,
        tableData : { type: Array },
        fields    : { type: Array }
    }, 
    }
</script>