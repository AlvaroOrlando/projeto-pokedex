const LegendariesService = require('../services/LegendariesService');

const  controller = {
    index: (req,res) =>{
        const LegendariesList = LegendariesService.listLegendaries()
       return res.json(LegendariesList);
    }
}

module.exports = controller;