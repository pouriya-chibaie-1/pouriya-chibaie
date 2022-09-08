const OptionGenrator=(item)=> {return {chart: {
    animations: {
enabled: true,
easing: 'easeinout',
speed: 1000,
animateGradually: {
    enabled: true,
    delay: 150
},
dynamicAnimation: {
    enabled: true,
    speed: 350
}
}
},
  series: [parseInt(item.progressSkill)],
  options: {
    
   
  },
labels:[`${item.progressSkill}%`],
fill: {
colors: ['#FFB400']
},
plotOptions:{
    radialBar: {
      background: 'red',
      }
  },

}
}
export default OptionGenrator;