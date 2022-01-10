const piyoda_v =3.6;
const velosaped_v =20.1;
const mashina_v = 70;
const samalyot_v =800;




var form = document.getElementById('form')
var isinput = document.getElementById('input')
var isbutton = document.getElementById('button')
var ispiyoda = document.getElementById('piyoda')
var isvelosaped = document.getElementById('velosaped')
var ismashina = document.getElementById('mashina')
var issamalyot = document.getElementById('samalyot')

// form.addEventListener('submit', event =>{
//     event.preventDefault()
//     console.log(isinput.value)
    
//     ispiyoda.textContent = getTime (piyoda_v, isinput.value)
//     isvelosaped.textContent = getTime (velosaped_v, isinput.value)
//     ismashina.textContent = getTime (mashina_v, isinput.value)
//     issamalyot.textContent = getTime (samalyot_v,isinput.value)

// })
//     function getTime (speed,distance) {
//         let time = distance/speed

//         return nromalizeTime(time)

//     }

//     function nromalizeTime(time){
//         let hour = Math.floor(time/ 60)
//         let minute = Math.round((time-hour) *60)

//         return `${hour} soat  ${minute} minut`
//     }

// biz html dan chaqirilgan formni addEvevntlistiner yordamida kuzatib uni 'submit' bo'lgan paytida javascriptga
// buyurilgan ishni bajarishini aytamiz. bizga [speed]-tezlik va [distance]-masofa kirib keladi isinput orqali
// biz function yordamida bu amalni bajaramiz [speed]/[distance] bu funksiya bizga faqat soatni chiqarib berad 
// biz yana bir function yaratamiz bu function bizga N soat N minut deb hsoblab beradi va bundan qaytagan returnni
// birinchi functionga birichisini nomini form ichidaga isinputga beramiz


form.addEventListener('submit', event=>{
    event.preventDefault()
    console.log(isinput.value)

    ispiyoda.textContent=getwell(piyoda_v,isinput.value)
        isvelosaped.textContent=getwell(velosaped_v,isinput.value)
    ismashina.textContent=getwell(mashina_v,isinput.value)
    issamalyot.textContent=getwell(samalyot_v,isinput.value)


})

function getwell(tezlik,masofa){
    let vaqt =masofa/tezlik

    return valution(vaqt)
}

function valution (vaqt){
    let soat = Math.floor(vaqt)
    let minut =Math.ceil((vaqt-soat)/60)
    return `${soat} soat ${minut} minut`
}