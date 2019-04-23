const router = require('express').Router()
const asyncWrapper = require('../utilities/async-wrapper').AsyncWrapper
const plansService = require('../services/plans-services')
const validator = require('../middleware/validator')

router.get('/', asyncWrapper(async (req,res)=>{
  let userId = null
  let plans = await plansService.findAll(userId)
  res.send(plans)
}))

router.get('/:id', asyncWrapper(async (req,res)=>{
   let id = req.params.id
   let userId =null
   let plans = await plansService.findOne(id)
}))

router.post('/', [validator('Plans')],asyncWrapper(async (req, res)=>{
  let plans = await plansService.create(req.body)
  res.send(plans)
}))

router.delete('/:id', asyncWrapper(async (req,res)=>{
    let id = req.params.id
    let plans = await plansService.deleteOne(id)
    res.send(plans)
}))

module.exports = router