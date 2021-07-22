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

const meal = [
    {
        id:0,
        imageUrl:'https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg',
        name:'Fish fofos',
        description:'STEP 1 Put the fish into a lidded pan and pour over enough water to cover. Bring to a simmer and gently poach for 10 minutes over a low heat with the lid on. Drain and flake the fish. STEP 2 Put the fish, potato, green chilli, coriander, cumin, black pepper, garlic and ginger in a large bowl. Season, add the rice flour, mix well and break in 1 egg. Stir the mixture and divide into 15, then form into small logs. Break the remaining eggs into a bowl and whisk lightly. Put the breadcrumbs into another bowl. Dip each fofo in the beaten egg followed by the breadcrumb mixture. Chill for 20 minutes. STEP 3 Heat 1cm of oil in a large frying pan over a medium heat. Fry the fofos in batches for 2 minutes on each side, turning gently to get an even golden brown colour all over. Drain on kitchen paper and repeat with the remaining fofos. STEP 4 For the onion salad, mix together the onion, coriander and lemon juice with a pinch of salt. Serve with the fofos and mango chutney.',
        category:'Seafood',
        area:'Portuguese',
        list1:'Olive Oil - 1 tbls',
        list2:'Onions - 1',
        list3:'Garlic - 1 clove',
        list4:'Butter - 1 tbsp',
        list5:'Mushrooms - 250g',
        list6:'Beef Fillet - 500g',
        list7:'Plain Flour - 1tbsp',
        list8:'Creme Fraiche - 150g',
        list9:'English Mustard - 1 tbsp',
        list10:'Beef Stock - 100ml',
        list11:'Parsley - Topping',
        list12:'Salt',
        videoUrl:'https://www.youtube.com/embed/IwF4oyDDKuI'
    },
    {
        id:1,
        imageUrl:'https://www.themealdb.com/images/media/meals/1550442508.jpg',
        name:'Chocolate Caramel Crispy',
        description:'Grease and line a 20 x 20cm/8" x 8" baking tin with parchment paper. Put the mars bars and butter in a heat proof bowl and place over a pan of barely simmering water. Mixing with a whisk, melt until the mixture is smooth. Pour over the rice krispies in a mixing bowl and mix until all the ingredients are evenly combined. Press evenly into the prepare baking tin and set aside. Melt the milk chocolate in the microwave or over a pan of barely simmering water. Spread the melted chocolate over the rice krispie mixture and leave to set in a cool place. Once set slice into squares and serve!',
        category:'Dessert',
        area:'British',
        list1:'Plain Flour - 300g',
        list2:'Butter - 75g',
        list3:'Cream Cheese - 100g',
        list4:'Icing Sugar - 1 tbls',
        list5:'Butter - 150g',
        list6:'Maple Syrup - 200ml',
        list7:'Light Brown Soft Sugar - 250g',
        list8:'Dark Brown Soft Sugar - 100g',
        list9:'Eggs - 4',
        list10:'Vanilla Extract - 1 tsp',
        list11:'Pecan Nuts - 400g',
        list12:'Dark Chocolate Chips - 200g',
        videoUrl:'https://www.youtube.com/embed/qsk_At_gjv0'
    },
    {
        id:2,
        imageUrl:'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg',
        name:'Beef stroganoff',
        description:'Heat the olive oil in a non-stick frying pan then add the sliced onion and cook on a medium heat until completely softened, so around 15 mins, adding a little splash of water if they start to stick at all. Crush in the garlic and cook for a 2-3 mins further, then add the butter. Once the butter is foaming a little, add the mushrooms and cook for around 5 mins until completely softened. Season everything well, then tip onto a plate. Tip the flour into a bowl with a big pinch of salt and pepper, then toss the steak in the seasoned flour. Add the steak pieces to the pan, splashing in a little oil if the pan looks particularly dry, and fry for 3-4 mins, until well coloured. Tip the onions and mushrooms back into the pan. Whisk the crème fraîche, mustard and beef stock together, then pour into the pan. Cook over a medium heat for around 5 mins. Scatter with parsley, then serve with pappardelle or rice',
        category:'Beef',
        area:'Russian',
        list1:'Olive Oil - 1 tbls',
        list2:'Onions - 1',
        list3:'Garlic - 1 clove',
        list4:'Butter - 1 tbsp',
        list5:'Mushrooms - 250g',
        list6:'Beef Fillet - 500g',
        list7:'Plain Flour - 1tbsp',
        list8:'Creme Fraiche - 150g',
        list9:'English Mustard - 1 tbsp',
        list10:'Beef Stock - 100ml',
        list11:'Parsley - Topping',
        list12:'Salt',
        videoUrl:'https://www.youtube.com/embed/YW48gEX8rg4'
    },
    {
        id:3,
        imageUrl:'https://www.themealdb.com/images/media/meals/yuwtuu1511295751.jpg',
        name:'Lamb Tagine',
        description:'Heat the olive oil in a heavy-based pan and add the onion and carrot. Cook for 3- 4 mins until softened. Add the diced lamb and brown all over. Stir in the garlic and all the spices and cook for a few mins more or until the aromas are released. Add the honey and apricots, crumble in the stock cube and pour over roughly 500ml boiling water or enough to cover the meat. Give it a good stir and bring to the boil. Turn down to a simmer, put the lid on and cook for 1 hour. Remove the lid and cook for a further 30 mins, then stir in the squash. Cook for 20 – 30 mins more until the squash is soft and the lamb is tender. Serve alongside rice or couscous and sprinkle with parsley and pine nuts, if using.',
        category:'Lamb',
        area:'Moroccan',
        list1:'Olive Oil - 2 tblsp',
        list2:'Carrots - 2 chopped',
        list3:'Lamb Leg - 500g',
        list4:'Garlic - 2 cloves minced',
        list5:'Cumin - ½ tsp',
        list6:'Ginger - ½ tsp',
        list7:'Saffron - ¼ tsp',
        list8:'Cinnamon - 1 tsp',
        list9:'Honey - 1 tblsp',
        list10:'Apricot - 100g',
        list11:'Vegetable Stock Cube - 1',
        list12:'Butternut Squash - 1 medium chopped',
        videoUrl:'https://www.youtube.com/embed/bR5Cqu84S_k'
    },
    {
        id:4,
        imageUrl:'https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg',
        name:'Choc Chip Pecan Pie',
        description:'First, make the pastry. Tip the ingredients into a food processor with 1 /4 tsp salt. Blend until the mixture resembles breadcrumbs. Drizzle 2-3 tsp cold water into the funnel while the blade is running – the mixture should start to clump together. Tip onto a work surface and bring together, kneading briefly into a ball. Pat into a disc, wrap in cling film, and chill for at least 20 mins. Heat oven to 200C/180C fan/gas 6. Remove the pastry from the fridge and leave at room temperature for 5 mins to soften. Flour the work surface, then unwrap the pastry and roll to a circle the thickness of a £1 coin. Use the pastry to line a deep, 23cm round fluted tin – mine was about 3cm deep. Press the pastry into the corners and up the sides, making sure there are no gaps. Leave 1cm pastry overhanging (save some of the pastry scraps for later). Line with baking parchment (scrunch it up first to make it more pliable) and fill with baking beans. Blind-bake for 15-20 mins until the sides are set, then remove the parchment and beans and return to the oven for 5 mins until golden brown. Trim the pastry so it’s flush with the top of the tin – a small serrated knife is best for this. If there are any cracks, patch them up with the pastry scraps. Meanwhile, weigh the butter, syrup and sugars into a pan, and add 1 /4 tsp salt. Heat until the butter has melted and the sugar dissolved, stirring until smooth. Remove from the heat and cool for 10 mins. Reduce oven to 160C/140C fan/gas 3. Beat the eggs in a bowl. Add the syrup mixture, vanilla and pecans, and mix until well combined. Pour half the mixture into the tart case, scatter over half the chocolate chips, then cover with the remaining filling and chocolate chips. Bake on the middle shelf for 50-55 mins until set. Remove from the oven and leave to cool, then chill for at least 2 hrs before serving',
        category:'Dessert',
        area:'American',
        list1:'Plain Flour - 300g',
        list2:'Butter - 75g',
        list3:'Cream Cheese - 100g',
        list4:'Icing Sugar - 1 tbls',
        list5:'Butter - 150g',
        list6:'Maple Syrup - 200ml',
        list7:'Light Brown Soft Sugar - 250g',
        list8:'Dark Brown Soft Sugar - 100g',
        list9:'Eggs - 4',
        list10:'Vanilla Extract - 1 tsp',
        list11:'Pecan Nuts - 400g',
        list12:'Dark Chocolate Chips - 200g',
        videoUrl:'https://www.youtube.com/embed/bR5Cqu84S_k'
    },
]

function showUI(item){
   const elm = meal[item]
   console.log(elm)
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

gMBtnElm.addEventListener('click',()=>{
    const randomValue = Math.floor(Math.random() * meal.length)
    console.log(randomValue)
    showUI(randomValue)
})