const trafficLights = document.querySelector('.trafficLights')
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

trafficLightEl1.style.background = ('green') 

function changeColor() {
    if (trafficLightEl1.style.background == ('green')) {
        trafficLightEl1.style.background = ('black')
        trafficLightEl2.style.background = ('yellow')
    } else if (trafficLightEl2.style.background == ('yellow')) {
        trafficLightEl2.style.background = ('black')
        trafficLightEl3.style.background = ('red')
    } else if (trafficLightEl3.style.background == ('red')) {
        trafficLightEl3.style.background = ('black')
        trafficLightEl1.style.background = ('green')
    }

}

trafficLights.addEventListener('click', changeColor)