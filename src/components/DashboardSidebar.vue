<template>
    <div class="iq-sidebar">
        <div class="iq-sidebar-logo d-flex justify-content-between">
        <router-link to="/">
            <img :src="require('@/assets/images/logos/healthful-logo-white.png')" class="img-fluid" alt="">
        </router-link>
        </div>
        <div id="sidebar-scrollbar">
            <nav class="iq-sidebar-menu">
                <ul id="iq-sidebar-toggle" class="iq-menu">
                    <li class="iq-menu-title"><i class="ri-subtract-line"></i><span>Dashboard</span></li>
                    <li :class="checkPage(linkname, 'home')">
                    <router-link to="/" class="iq-waves-effect">
                        <i class="ri-group-fill"></i><span>Home</span>
                    </router-link>
                    </li>
                    <li id="loops-li" :class="checkPage(linkname, 'loop')">
                        <a href="#doctor-info" class="iq-waves-effect" data-toggle="collapse" aria-expanded="true">
                            <span class="ripple rippleEffect" style="width: 200px; height: 200px; top: -90px; left: 29px;"></span>
                            <i class="icon dripicons-media-loop"></i>
                            <span>MAPE-K Loops</span>
                            <i class="ri-arrow-right-s-line iq-arrow-right"></i>
                        </a>
                        <ul id="doctor-info" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle" style="">
                            <li id="all-loops-li" :class="checkPage(linkname, 'listloops')">
                                <router-link to="/loops"><i class="ri-file-list-fill"></i>All Loops</router-link>
                            </li>
                            <li id="add-loop-li" :class="checkPage(linkname, 'addloop')">
                                <router-link to="/loops/new"><i class="ri-user-add-fill"></i> Add Loop</router-link>
                            </li>
                        </ul>
                    </li>
                    <li :class="checkPage(linkname, 'reports')">
                    <a href="#reports" class="iq-waves-effect">
                        <i class="icon dripicons-graph-bar"></i>
                        <span>Reports</span>
                    </a>
                    </li>
                </ul>
            </nav>
            <div class="p-3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            linkname: String
        },
        computed: {
            
        },
        methods:{
            checkPage(linkname, name){                
                if(linkname.includes(name)){
                    return 'active';
                }else{
                    return '';
                }
                
            }
        },
        mounted: function () {
        }
    }
</script>