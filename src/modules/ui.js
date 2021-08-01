import mlData from "./data"

class UI{
    selectors(){
     const gMBtnElm = document.querySelector('.gMBtn')
     const showAllElm = document.querySelector('.showAll')
     const imageUrlElm = document.querySelector('.imageUrl')
     const nameElm = document.querySelector('.name')
     const descriptionElm = document.querySelector('.description')
     const categoryElm = document.querySelector('.category')
     const areaElm = document.querySelector('.area')
     const iframeElm = document.querySelector('iframe')
     const list1Elm = document.querySelector('.list1')
     const list2Elm = document.querySelector('.list2')
     const list3Elm = document.querySelector('.list3')
     const list4Elm = document.querySelector('.list4')
     const list5Elm = document.querySelector('.list5')
     const list6Elm = document.querySelector('.list6')
     const list7Elm = document.querySelector('.list7')
     const list8Elm = document.querySelector('.list8')
     const list9Elm = document.querySelector('.list9')
     const list10Elm = document.querySelector('.list10')
     const list11Elm = document.querySelector('.list11')
     const list12Elm = document.querySelector('.list12')
     return{
         gMBtnElm,showAllElm,imageUrlElm,nameElm,descriptionElm,categoryElm,areaElm,iframeElm,list1Elm,list2Elm,
         list3Elm,list4Elm,list5Elm,list6Elm,list7Elm,list8Elm,list9Elm,list10Elm,list11Elm,list12Elm
     }
    }
   showUI(item){
     const {showAllElm,imageUrlElm,nameElm,descriptionElm,categoryElm,areaElm,iframeElm,list1Elm,list2Elm
         ,list3Elm,list4Elm,list5Elm,list6Elm,list7Elm,list8Elm,list9Elm,list10Elm,list11Elm,list12Elm} = this.selectors()
     const elm = mlData.meal[item]
     showAllElm.style.display='block'
     imageUrlElm.src=elm.imageUrl
     nameElm.textContent=elm.name
     descriptionElm.textContent=elm.description
     categoryElm.textContent=elm.category
     areaElm.textContent=elm.area
     iframeElm.setAttribute('src',elm.videoUrl)
     list1Elm.textContent=elm.list1
     list2Elm.textContent=elm.list2
     list3Elm.textContent=elm.list3
     list4Elm.textContent=elm.list4
     list5Elm.textContent=elm.list5
     list6Elm.textContent=elm.list6
     list7Elm.textContent=elm.list7
     list8Elm.textContent=elm.list8
     list9Elm.textContent=elm.list9
     list10Elm.textContent=elm.list10
     list11Elm.textContent=elm.list11
     list12Elm.textContent=elm.list12
   }
   randomValue(){
     const randomValue = Math.floor(Math.random() * mlData.meal.length)
     this.showUI(randomValue)
   }
   loadEventListener(){
     const {gMBtnElm} = this.selectors()
     gMBtnElm.addEventListener('click',()=>this.randomValue())
   }
}
 
const ui = new UI()
export default ui