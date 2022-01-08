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

form.addEventListener('submit', event =>{
    event.preventDefault()
    console.log(isinput.value)
    
    ispiyoda.textContent = getTime (piyoda_v, isinput.value)
    isvelosaped.textContent = getTime (velosaped_v, isinput.value)
    ismashina.textContent = getTime (mashina_v, isinput.value)
    issamalyot.textContent = getTime (samalyot_v,isinput.value)

})
    function getTime (speed,distance) {
        let time = distance/speed

        return nromalizeTime(time)

    }

    function nromalizeTime(time){
        let hour = Math.floor(time/ 60)
        let minute = Math.round((time-hour) *60)

        return `${hour} soat  ${minute} minut`
    }