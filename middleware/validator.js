const Joi = require("joi")
const Subscriptions = require("../models/subscription")
const Plan = require("../models/plan")

"use strict"

let validators = {
    "Subscriptions": {
        scopes: {
            default: Subscriptions.SubscriptionValidationSchema
        }
    },
    "Plans": {
        scopes: {
            default: Plan.PlanValidationSchema
        }
    },
}

function scopeExists(validator, scope){
    return Object.keys(validator.scopes).find(key => key === scope) != undefined
}

function getSchema(model, scope){
    let validator = validators[model]
    if(!validator){
        throw new Error("validator doesnt exist")
    }

    if (validator.scopes){
        if(scope){
            if(!scopeExists(validator, scope)){
              throw new Error(`scope ${scope} doest exist doesnt exit in ${model}`)
            }
            else{
                return validator.scopes[scope]
            }

        }else {
            return validator.scopes.default
        }
        
    } else{
        return validator
    }
}

function validate(model, object, scope){
     return Joi.validate(object, getSchema(model, scope), {
         allowUnknown: true
     })
}

//Actual factory
module.exports = function ValidationMiddleware(model, scope=null){
    return (req, res, next) =>{
        const validationResult = validate(model, req.body, scope);
        if (validationResult.error){
            throw new Error(validationResult.error.message);
        }else{
            next()
        } 
    }
}