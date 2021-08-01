import 'regenerator-runtime/runtime'

class mealData{
    meal = []
   async apiData(){
      const res = await fetch('http://localhost:3000/meal')
      return await res.json()
   }
    getData(){
       this.apiData().then(data=>{
          this.meal.push(...data)
       })
       .catch(err=>{
           console.log(new Error(err))
       })
   }
}
const mlData = new mealData()
mlData.getData()

export default mlData