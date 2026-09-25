const { uniV3Export } = require('../helper/uniswapV3');
const { mergeExports } = require('../helper/utils');

const exportStandardPoolTVL = uniV3Export({
  robinhood: { factory: '0xf03875b5Ec5eAc83cab83A6c2ab17844304AA7a0', fromBlock: 54162498, isAlgebra: true, permitFailure: true, extraKey:'standard-pool'}, // For standard pools
  hyperliquid: { factory: '0x5f95E92c338e6453111Fc55ee66D4AafccE661A7', fromBlock: 11022081, isAlgebra: true , permitFailure: true, extraKey:'standard-pool'}, // For standard pools
})

const exportCustomPoolTVL = uniV3Export({
  robinhood: { factory: '0xf03875b5Ec5eAc83cab83A6c2ab17844304AA7a0', fromBlock: 54162498, isAlgebra: true , permitFailure: true, isCustom: true, extraKey:'custom-pool'}, // For custom pools
  hyperliquid: { factory: '0x5f95E92c338e6453111Fc55ee66D4AafccE661A7', fromBlock: 11022081, isAlgebra: true , permitFailure: true, isCustom: true, extraKey:'custom-pool'} // For custom pools
})

module.exports = mergeExports([exportStandardPoolTVL , exportCustomPoolTVL])