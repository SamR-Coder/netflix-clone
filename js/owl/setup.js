$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var bar = document.getElementsByClassName('bar')[0]
bar.addEventListener('click',menu)
var bars = document.getElementsByClassName('bars')[0]
bars.addEventListener('click',out)
var bars = document.getElementsByClassName('bars')[0]
var nav = document.getElementsByTagName('nav')[0]
var fff = document.getElementsByClassName('fff')[0]
function out(){
    bars.removeAttribute('id','barrs')
    nav.removeAttribute('class','menu')
    fff.removeAttribute('id','films')

}

function menu(){
   
    console.log(bars, fff,nav)
    nav.setAttribute('class','menu')
    bars.setAttribute('id','barrs')
    fff.setAttribute('id','films')
}