<template>
    <!-- Wrapper Start -->
    <div class="wrapper">
        <!-- Sidebar  -->
        <DashboardSidebar linkname="addloop"/>
        <!-- Page Content  -->
        <div id="content-page" class="content-page">
            <!-- TOP Nav Bar -->
            <DashboardHeader :username="username" :usergender="gender"/>
            <!-- TOP Nav Bar END -->
            <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-12">
                    <DashboardBlock blockTitle="Add new loop">
                      <div class="row">
                        <div class="col-md-3">
                            <ul id="top-tabbar-vertical" class="p-0">
                              <li class="active" id="gData">
                                  <a href="">
                                  <i class="ri-information-line text-secondary"></i><span>General Data</span>
                                  </a>
                              </li>
                              <li id="monitor">
                                  <a href="">
                                  <i class="ri-database-line text-primary"></i><span>Monitor</span>
                                  </a>
                              </li>
                              <li id="analyze">
                                  <a href="">
                                  <i class="ri-search-eye-line text-danger"></i><span>Analyze</span>
                                  </a>
                              </li>
                              <li id="plan">
                                  <a href="">
                                  <i class="ri-send-plane-2-line text-success"></i><span>Plan</span>
                                  </a>
                              </li>
                              <li id="execute">
                                  <a href="">
                                  <i class="ri-run-line text-warning"></i><span>Execute</span>
                                  </a>
                              </li>
                            </ul>
                        </div>
                        <div class="col-md-9">
                            <form id="form-wizard3" class="text-center" style="height: 100%;">
                              <!-- fieldsets -->
                              <fieldset style="height: 100%;">
                                  <div class="form-card text-left" style="height: 95%;">
                                    <div class="row">
                                        <div class="col-12">
                                          <h3>General Data:</h3>
                                          <p>In this first section, you must provide general data about the loop, such as name and description.</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                          <div class="form-group">
                                              <label for="name">Name: *</label>
                                              <input v-model="loopName" :class="validations.loopName ? 'is-invalid' : ''" type="text" class="form-control" id="name" name="name" placeholder="Add a name to represent this loop" required="required">
                                              <div class="invalid-feedback" v-if="validations.loopName">{{validations.loopName}}</div>
                                          </div>
                                          <div class="form-group">
                                              <label for="description">Description: *</label>
                                              <textarea v-model="loopDescription" :class="validations.loopDescription ? 'is-invalid' : ''" class="form-control" id="description" name="description" placeholder="Add a description to explain how this loop works" rows="3" style="line-height: 30px;"></textarea>
                                              <div class="invalid-feedback" v-if="validations.loopDescription">{{validations.loopDescription}}</div>
                                          </div>
                                          <div class="form-group">
                                              <label for="name">Unique Key: *</label>
                                              <input v-model="uniqueKey" :class="validations.uniqueKey ? 'is-invalid' : ''" type="text" class="form-control" id="uniqueKey" name="uniqueKey" placeholder="Add a unique key to link data collected and your loop" required="required">
                                              <div class="invalid-feedback" v-if="validations.uniqueKey">{{validations.uniqueKey}}</div>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                                  <button :disabled="!enableFirstStep.every(i => i === true)" id="submit" type="button" name="next" class="btn btn-primary next action-button float-right" value="Next">Next</button>
                              </fieldset>
                              <fieldset style="height: 100%;">
                                  <div class="form-card text-left" style="height: 95%;">
                                    <div class="row">
                                        <div class="col-12">
                                          <h3>Monitor:</h3>
                                          <p>
                                            Here, it is the first step of MAPE-K loop.<br/>
                                            Please, configure how the platform should collect data.
                                          </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-12">
                                          <div class="form-group">
                                            <label for="dataCollectionFrequency">Data Collection Frequency: *</label>
                                            <input v-model="dataCollectionFrequency" type="text" class="form-control" id="dataCollectionFrequency" readonly="">
                                          </div>
                                          <div class="form-group">
                                            <label for="sensors">Sensors:</label>
                                            <select v-model="sensors" multiple="" class="form-control" id="sensors" style="min-height: 150px;">
                                                <option>Pedometer</option>
                                                <option>Heart Rate</option>
                                                <option>Accelerometer</option>
                                                <option>Sleep</option>
                                                <option>GPS</option>
                                                <option>Physical Activity</option>
                                                <option>Stress</option>
                                                <option>Light</option>
                                                <option>Gyroscope</option>
                                            </select>
                                          </div>
                                          <div class="form-group">
                                            <div class="custom-control custom-switch">
                                                <input v-model="questAsRef" type="checkbox" class="custom-control-input" id="useQuestionnaire">
                                                <label class="custom-control-label" for="useQuestionnaire">Your data collection use any questionnaire as reference?</label>
                                            </div>
                                          </div>
                                          <div class="form-group">
                                              <label>Questionnaire: *</label>
                                              <select v-model="questionnaire" :disabled="!questAsRef" class="form-control" id="questionnaire">
                                                <option selected="" disabled="">Select your reference questionnaire</option>
                                                <option>WHOQOL-BREF</option>
                                                <option>KIDSCREEN</option>
                                                <option>SF-36</option>
                                                <option>PHQ-9</option>
                                                <option>Custom</option>
                                            </select>
                                          </div>
                                          <div class="form-group">
                                            <label>Questionnaire Frequency: *</label>
                                            <select v-model="quesFrequency" :disabled="!questAsRef" class="form-control" id="quesFrequency">
                                              <option selected="" disabled="">Select questionnaire frequency</option>
                                              <option>Daily</option>
                                              <option>Weekly</option>
                                              <option>Monthly</option>
                                              <option>Custom</option>
                                            </select>
                                          </div>
                                          <div class="form-group">
                                            <label for="questTime">Questionnaire Time: *</label>
                                            <input v-model="questTime" :disabled="!questAsRef" type="time" class="form-control" id="questTime">
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                                  <button :disabled="!enableSecondStep.every(i => i === true)" type="button" name="next" class="btn btn-primary next action-button float-right" value="Next">Next</button>
                                  <button type="button" name="previous" class="btn btn-dark previous action-button-previous float-right mr-3" value="Previous">Previous</button>
                              </fieldset>
                              <fieldset style="height: 100%;">
                                  <div class="form-card text-left" style="height: 95%;">
                                    <div class="row">
                                        <div class="col-12">
                                          <h3>Analyze:</h3>
                                          <p>
                                            In the second step of MAPE-K loop, you should define a strategy to analyze data collected in monitoring. <br/>
                                            To do this, Healthful provides an integration with Athena tool.<br/>
                                            Please, configure a system using Athena, then select this system here.
                                          </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                          <div class="form-group">
                                              <label for="athenaSystem">Athena System: *</label>
                                              <select v-model="athenaSystem" class="form-control" id="athenaSystem">
                                                <option selected="" disabled="">Select a system</option>
                                                <option>QoL analysis</option>
                                                <option>Gait analysis</option>
                                                <option>Fall detection</option>
                                                <option>Depression risk analysis</option>
                                              </select>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                                  <button :disabled="!enableThirdStep.every(i => i === true)" type="button" name="next" class="btn btn-primary next action-button float-right" value="Next">Next</button>
                                  <button type="button" name="previous" class="btn btn-dark previous action-button-previous float-right mr-3" value="Previous">Previous</button>
                              </fieldset>
                              <fieldset style="height: 100%;">
                                  <div class="form-card text-left" style="height: 95%;">
                                    <div class="row">
                                        <div class="col-12">
                                          <h3>Plan:</h3>
                                          <p>
                                            In planning step, you should configure the risk context that will be monitored.<br/>
                                            Also, it is important to create interventions rules.
                                          </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-5">
                                        <div class="form-group">
                                            <label for="contexts">Contexts: *</label>
                                            <textarea v-model="contexts" :class="validations.contexts ? 'is-invalid' : ''" class="form-control" id="contexts" name="contexts" placeholder="Include risk contexts" rows="6" style="line-height: 30px;"></textarea>
                                            <div class="invalid-feedback" v-if="validations.contexts">{{validations.contexts}}</div>
                                          </div>
                                      </div>
                                      <div class="col-md-1 text-center">
                                        <div class="my-vr"></div>
                                      </div>
                                      <div class="col-md-5">
                                        <div class="form-group">
                                          <label for="rule-name">Rule Name: *</label>
                                          <input type="text" class="form-control" id="rule-name" name="rule-name" :class="validations.ruleName ? 'is-invalid' : ''" placeholder="Add a name to represent this rule" required="required" v-model="ruleName">
                                          <div class="invalid-feedback" v-if="validations.ruleName">{{validations.ruleName}}</div>
                                        </div>
                                        <div class="form-group">
                                          <label for="risk-context">IF (context): *</label>
                                          <select class="form-control" id="risk-context" v-model="ruleContext" :class="validations.ruleContext ? 'is-invalid' : ''">
                                            <option selected="" disabled="">Select a context</option>
                                            <option>Context 1</option>
                                            <option>Context 2</option>
                                            <option>Context 3</option>
                                          </select>
                                          <div class="invalid-feedback" v-if="validations.ruleContext">{{validations.ruleContext}}</div>
                                        </div>
                                        <div class="form-group">
                                          <label for="intervention">THEN (action): *</label>
                                          <select class="form-control" id="intervention" v-model="ruleAction" :class="validations.ruleAction ? 'is-invalid' : ''">
                                            <option selected="" disabled="">Select an intervention</option>
                                            <option>Send a periodic notification</option>
                                            <option>Adapt the environment</option>
                                            <option>Call the emergency department</option>
                                          </select>
                                          <div class="invalid-feedback" v-if="validations.ruleAction">{{validations.ruleAction}}</div>
                                        </div>
                                        <button type="button" class="btn btn-outline-success mb-3" style="width: 100%;" @click="addNewIntervention" :disabled="!enableRuleSubmission.every(i => i === true)">Add new intervenation</button>
                                      </div>
                                    </div>
                                    <hr class="mb-5"/>
                                    <div class="row">
                                      <div class="col-12">
                                          <p class="mb-4">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever
                                          </p>
                                          <table class="table table-hover">
                                            <caption>List of Interventions</caption>
                                            <thead>
                                              <tr>
                                                  <th scope="col-1">ID</th>
                                                  <th scope="col-2">Name</th>
                                                  <th scope="col-3">Context</th>
                                                  <th scope="col-4">Action</th>
                                                  <th scope="col-2">Options</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr v-for="(entry, i) in this.interventions" :key="i">
                                                <th scope="row">{{ i + 1 }}</th>
                                                <td>{{ entry.name }}</td>
                                                <td>{{ entry.context }}</td>
                                                <td>{{ entry.action }}</td>
                                                <td>
                                                  <button type="button" class="btn btn-outline-danger" @click="removeIntervention(i)"><i class="ri-alert-fill"></i>Remove</button>
                                                </td>
                                              </tr>
                                            </tbody>
                                            <div :style='{display: validations.interventions ? "block" : "none"}' class="invalid-feedback" v-if="validations.interventions">{{validations.interventions}}</div>
                                          </table>
                                      </div>
                                    </div>
                                  </div>
                                  <button :disabled="!enableFourthStep.every(i => i === true)" type="button" name="next" class="btn btn-primary next action-button float-right" value="Next">Next</button>
                                  <button type="button" name="previous" class="btn btn-dark previous action-button-previous float-right mr-3" value="Previous">Previous</button>
                              </fieldset>
                              <fieldset style="height: 100%;">
                                  <div class="form-card text-left" style="height: 95%;">
                                    <div class="row">
                                        <div class="col-12">
                                          <h3>Execute:</h3>
                                          <p>
                                            This step is fully automated by the Healthful platform.<br/>
                                            Thus, here you have just a review of our MAPE-K loop.<br/>
                                            Please, click on submit to save and start this loop.
                                          </p>
                                        </div>
                                    </div>
                                    <div class="row mb-5">
                                      <div class="col-md-5">
                                        <h4 class="mb-3">General Data</h4>
                                        <div class="row">
                                          <dt class="col-sm-3">Name:</dt>
                                          <dd class="col-sm-9">{{loopName}}</dd>
                                          <dt class="col-sm-3">Description:</dt>
                                          <dd class="col-sm-9">{{loopDescription}}</dd>
                                          <dt class="col-sm-3">Unique Key:</dt>
                                          <dd class="col-sm-9">{{uniqueKey}}</dd>
                                        </div>
                                      </div>
                                      <div class="col-md-1 text-center">
                                        <div class="my-vr"></div>
                                      </div>
                                      <div class="col-md-5">
                                        <h4 class="mb-3">Monitor and Analyze</h4>
                                        <div class="row">
                                          <dt class="col-sm-4">Data Collection:</dt>
                                          <dd class="col-sm-8">{{dataCollectionFrequency}}</dd>
                                          <dt class="col-sm-4">Sensors:</dt>
                                          <dd class="col-sm-8">{{sensors.join(', ')}}</dd>
                                          <dt v-if="questAsRef" class="col-sm-4">Questionnaire:</dt>
                                          <dd v-if="questAsRef" class="col-sm-8">{{questionnaire}}</dd>
                                          <dt v-if="questAsRef" class="col-sm-4">Frequency:</dt>
                                          <dd v-if="questAsRef" class="col-sm-8">{{quesFrequency}}</dd>
                                          <dt v-if="questAsRef" class="col-sm-4">Time:</dt>
                                          <dd v-if="questAsRef" class="col-sm-8">{{questTime}}</dd>
                                          <dt class="col-sm-4">Athena System:</dt>
                                          <dd class="col-sm-8">{{athenaSystem}}</dd>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-12">
                                        <h4 class="mb-3">Plan</h4>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-5">
                                        <div class="form-group">
                                          <dt class="col-sm-12 mb-1" style="padding-left: 0px;">Contexts of Risk:</dt>
                                          <textarea v-model="contexts" class="form-control" rows="6" disabled></textarea>
                                        </div>
                                      </div>
                                      <div class="col-md-1 text-center">
                                        <div class="my-vr"></div>
                                      </div>
                                      <div class="col-md-5">
                                        <dt class="col-sm-12 mb-1" style="padding-left: 0px;">List of Interventions:</dt>
                                        <table class="table table-hover">
                                          <thead>
                                            <tr>
                                                <th scope="col-1">ID</th>
                                                <th scope="col-2">Name</th>
                                                <th scope="col-4">Context</th>
                                                <th scope="col-5">Action</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr v-for="(entry, i) in this.interventions" :key="i">
                                              <th scope="row">{{ i + 1 }}</th>
                                              <td>{{ entry.name }}</td>
                                              <td>{{ entry.context }}</td>
                                              <td>{{ entry.action }}</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>

                                  </div>
                                  <button type="button" class="btn btn-primary action-button float-right submit" @click="submitNewLoop">Submit</button>
                                  <button type="button" name="previous" class="btn btn-dark previous action-button-previous float-right mr-3" value="Previous">Previous</button>
                              </fieldset>
                            </form>
                        </div>
                      </div>
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

  export default {
    name: 'DashboardPage',
    components:{
      DashboardHeader,
      DashboardFooter,
      DashboardSidebar,
      DashboardBlock
    },
    data: () => ({
      loopName: "",
      loopDescription: "",
      uniqueKey: "",
      enableFirstStep: [false, false, false],

      dataCollectionFrequency: "Daily",
      sensors: [],
      questAsRef: false,
      questionnaire: "",
      quesFrequency: "",
      questTime: "10:00",
      enableSecondStep: [true, false, true, true, true],

      athenaSystem: "",
      enableThirdStep: [false],
      
      ruleName: "",
      ruleContext: "",
      ruleAction: "",
      enableRuleSubmission: [false, false, false],
      
      contexts: "",
      interventions: [],
      enableFourthStep: [false, false],

      validations: [],
    }),
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
    },
    computed:{
      
    },
    watch:{
      loopName(value){
        this.loopName = value;
        this.validations['loopName'] = this.isEmptyValidation(this.loopName, this.enableFirstStep, 0);
      },
      loopDescription(value){
        this.loopDescription = value;
        this.validations['loopDescription'] = this.isEmptyValidation(this.loopDescription, this.enableFirstStep, 1);
      },
      uniqueKey(value){
        this.uniqueKey = value ? value :  '';
        this.uniqueKey = this.uniqueKey.replace(new RegExp(' ', 'g'), '_').toLowerCase();
        this.validations['uniqueKey'] = this.isEmptyValidation(this.uniqueKey, this.enableFirstStep, 2);
      },
      /* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */
      sensors(value){
        this.sensors = value;
        this.validations['sensors'] = this.isEmptyValidation(this.sensors, this.enableSecondStep, 1)
      },
      questAsRef(value){
        this.questAsRef = value;
        if(this.questAsRef){
          this.enableSecondStep[2] = this.questionnaire ? true : false;
          this.enableSecondStep[3] = this.quesFrequency ? true : false;
          this.enableSecondStep[4] = this.questTime ? true : false;
        }
      },
      questionnaire(value){
        this.questionnaire = value;
        this.validations['questionnaire'] = this.isEmptyValidation(this.questionnaire, this.enableSecondStep, 2);
      },
      quesFrequency(value){
        this.quesFrequency = value;
        this.validations['quesFrequency'] = this.isEmptyValidation(this.quesFrequency, this.enableSecondStep, 3);
      },
      questTime(value){
        this.questTime = value;
        this.validations['questTime'] = this.isEmptyValidation(this.questTime, this.enableSecondStep, 4);
      },
      /* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */
      athenaSystem(value){
        this.athenaSystem = value;
        this.validations['athenaSystem'] = this.isEmptyValidation(this.athenaSystem, this.enableThirdStep, 0);
      },
      /* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */
      ruleName(value){
        this.ruleName = value;
        this.validations['ruleName'] = this.isEmptyValidation(this.ruleName, this.enableRuleSubmission, 0)
      },
      ruleContext(value){
        this.ruleContext = value;
        this.validations['ruleContext'] = this.isEmptyValidation(this.ruleContext, this.enableRuleSubmission, 1)
      },
      ruleAction(value){
        this.ruleAction = value;
        this.validations['ruleAction'] = this.isEmptyValidation(this.ruleAction, this.enableRuleSubmission, 2)
      },
      /* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */
      contexts(value){
        this.contexts = value;
        this.validations['contexts'] = this.isEmptyValidation(this.contexts, this.enableFourthStep, 0);
      },
    },
    methods: {
      addNewIntervention(){
        this.interventions.push({ name: this.ruleName, context: this.ruleContext, action: this.ruleAction })
        this.validations['interventions'] = this.interventionsValidation(this.interventions, this.enableFourthStep, 1);

        //this.ruleName = "";
        //this.ruleContext = "";
        //this.ruleAction = ""; 
      },
      removeIntervention(index){
        if (index > -1) {
          this.interventions.splice(index, 1);
        }

        this.validations['interventions'] = this.interventionsValidation(this.interventions, this.enableFourthStep, 1);
      },
      isEmptyValidation(value, validationList, fieldIndex){
        if(!value){
          validationList[fieldIndex] = false;
          return 'This field must not be blank.';
        }else{
          validationList[fieldIndex] = true;
          return '';
        }
      },
      emailValidation(value, validationList, fieldIndex){
        var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
        if (regex.test(value)){
          validationList[fieldIndex] = true;
          return '';
        }else{
          validationList[fieldIndex] = false;
          return 'Invalid e-mail address.';
        }
      },
      interventionsValidation(value, validationList, fieldIndex){
        if(value.length === 0){
          validationList[fieldIndex] = false;
          return 'You should include at least one intervention rule.';
        }else{
          validationList[fieldIndex] = true;
          return '';
        }
      },
      submitNewLoop(){
        var loop = {
          loopName                : this.loopName,
          loopDescription         : this.loopDescription,
          uniqueKey               : this.uniqueKey,
          dataCollectionFrequency : this.dataCollectionFrequency,
          sensors                 : this.sensors,
          questionnaire           : this.questionnaire,
          quesFrequency           : this.quesFrequency,
          questTime               : this.questTime,
          athenaSystem            : this.athenaSystem,
          contexts                : this.contexts,
          interventions           : this.interventions
        };

        var json = JSON.stringify(loop);
        console.log(json);

        //TODO: Send data to server
        //TODO: Clear all fields
      }
    }
  }
</script>