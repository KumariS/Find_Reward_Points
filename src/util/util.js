const getRewardPoints = (amount)=>{

  let reward =amount>100? ((amount-100)*2)+50 : (amount>50? (amount-50)*1: 0)

  return Math.ceil(reward);
}

export default getRewardPoints;