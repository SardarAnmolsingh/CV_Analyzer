const mongoose = require ("mongoose")

const technicalQuestionsSchema = new mongoose.Schema({
             
             question:{
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
        type:String,
        required:[true,"Intention is required"]
      },
      answer:{
        type:String,
        required:[true,"Answer is required"]
      }

},{ _id:false})

const skillGapSSchema = new mongoose.Schema({

     skill:{
          type:String,
          required:[true,"the skill required"]
     },
     severity:{
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

Jobdescription:{
    type :String,
    required:[true,"the job description is required"]
},
resume:{
    type:String
},
selfDescription:{
  type :String
},
matchScore:{
    type:Number,
    min:0,
    max:100
},
TechnicalQuestions:[technicalQuestionsSchema],
BehavioralQuestions:[BehaviourQuestionsSchema],
SkillGaps:[skillGapSSchema],
PreparationPlan:[preparationPlanSchema],
// /user:{
//     type:mongoose.Schema.Types.ObjectId,
// ref:"users"
// }
jobtitle:{
    type :String, 
    required: [ true,"the job title is required"]
}
},{timestamps: true});





const InterviewReportModel = mongoose.model("InterviewReport",InterviewReportSchema)




module.exports= InterviewReportModel;
