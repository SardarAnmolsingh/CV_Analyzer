const mongoose = require ("mongoose")

const technicalquestionsSchema = new mongoose.Schema({
             
             quetion:{
                type:String,
                required:[true,"technical question is required"]
             },
             intention:{
              type:String,
              required:[true,"Intention is required"]
             },
             answer:{
                type:String,
                required:[true,"Answer is required"]
             },
            },{ _id:false})


const BehaviourQuestionsSchema =new mongoose.Schema({

      question:{
        type:String,
        required:[true,"The Behavioralquestion is required"]
      },
      intention:{
        type:true,
        required:[true,"Intention is required"]
      },
      answer:{
        type:String,
        required:[true,"Answer is required"]
      }

},{ _is:false})

const skillGapSSchema = new mongoose.Schema({

     skillGap:{
          type:String,
          required:[true,"the skill required"]
     },
     Severity:{
        type:String,
        enum:["low","medium","high"],
        required:[true,"severity is required"]

}},{  _id:false})

const preparationPlanSchema = new mongoose.Schema({

   day:{
    type:Number,
    required:[true,"Day is required"]
   },
   focus:{
    type: String,
        required: [ true, "Focus is required" ]
   },
   tasks:[{
       type:String,
       required:[true,"The task is required"]
}]
})



const InterviewReportSchema = new mongoose.Schema({

jobdescription:{
    type :String,
    requird:[true,"the job description is required"]
},
resume:{
    type:String
},
selfDescription:{
  type :String
},
matchscore:{
    type:Number,
    min:0,
    max:100
},
technicalquestions:{technicalquestionsSchema},
BehavioralQuestions:{BehaviourQuestionsSchema},
SkillGap:{skillGapSSchema},
preparationPlan:{preparationPlanSchema},
user:{
    type:mongoose.Schema.Types.ObjectId,
ref:"users"
},
jobtitle:{
    type :String,
    required: [true,"the job title is required"]
}},{timestamps: true})


const InterviewReportModel = mongoose.model("InterviewReport",InterviewReportSchema)




module.exports=InterviewReportModel














})





















})