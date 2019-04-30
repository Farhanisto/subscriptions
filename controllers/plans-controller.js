const router = require('express').Router()
const asyncWrapper = require('../utilities/async-wrapper').AsyncWrapper
const PlansService = require('../services/plans-services')
const validator = require('../middleware/validator')

router.get('/', asyncWrapper(async (req,res)=>{
  let userId = null
  const plan = new PlansService()
  let plans = await plan.findAll(userId)
  res.send(plans)
}))

router.get('/:id', asyncWrapper(async (req,res)=>{
   let id = req.params.id
   let userId =null
   const plan = new PlansService()
   let plans = await plan.findOne(id)
}))

router.post('/', [validator('Plans')],asyncWrapper(async (req, res)=>{
  const plan = new PlansService()
  let plans = await plan.create(req.body)
  res.send(plans)
}))

router.delete('/:id', asyncWrapper(async (req,res)=>{
    let id = req.params.id
    let plans = await PlansService.deleteOne(id)
    res.send(plans)
}))

module.exports = router