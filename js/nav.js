window.addEventListener('scroll', function() {
    var navbar = document.getElementById('header');

  
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.style.backgroundColor = 'var(--body-color)'; 


  
    } else {
      navbar.style.backgroundColor = 'transparent';   
    }
  });
  const calculateform = document.getElementById('calculate-form'),
        calculateCm =document.getElementById('calculate-cm'),
        calculateKg = document.getElementById('calculate-kg'),
        calculateMessage = document.getElementById('calculate-message')

  const calculateBmi =(e) =>{
    e.preventDefault()

    if (calculateCm.value ==='' || calculateKg.value === ''){
      calculateMessage.classList.remove('color-green')
      calculateMessage.classList.add('color-red')

      calculateMessage.textContent = 'fill in the height and weight'

      setTimeout(()=>{
        calculateMessage.textContent = ''
      },3000)
    } else {
      const cm =calculateCm.value / 100,
      kg= calculateKg.value,
      bmi =Math.round(kg / (cm * cm))

      if(bmi < 18.5){
        calculateMessage.classList.add('color-green')
        calculateMessage.textContent = `your bmi is ${bmi} and you are skinny`
      } else if (bmi < 25){
        calculateMessage.classList.add('color-green')
        calculateMessage.textContent = `your bmi is ${bmi} and you are healthy`
      } else {
        calculateMessage.classList.add('color-green')
        calculateMessage.textContent = `your bmi is ${bmi} and you are overweight`
       }
       calculateCm.value=''
       calculateKg.value = ''
       setTimeout(()=>{
        calculateMessage.textContent = ''
       }, 4000)
    }
  }
  calculateform.addEventListener( "submit", calculateBmi);
