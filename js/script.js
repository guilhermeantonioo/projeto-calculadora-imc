const enviar = document.getElementById('calcular')

enviar.addEventListener('click' , function(event){
    event.preventDefault();

    const peso = document.getElementById('weight').value;
    const altura = document.getElementById('height').value;


   
    const imc = (peso / (altura*altura)).toFixed(2);
    let description = '';
    let value = document.getElementById('value');
    if(!altura || peso == ''){
        alert('Preencha todos os campos!')
        document.getElementById('esconder').classList.add('hidden');
    }else{
      
       document.getElementById('esconder').classList.remove('hidden');
    }
    
    document.getElementById('value').classList.add('cuidado');
    if(imc < 18.5){
        description = 'Você está abaixo do peso, cuidado!'
    }else if(imc >= 18.5 && imc <= 25){
        description = 'Você está no peso ideal, parábens'
        document.getElementById('value').classList.remove('cuidado');
        document.getElementById('value').classList.add('normal');
    }else if(imc >= 25 && imc <= 30){
        description = 'Você está com sobrepeso, cuidado!'
    }else if(imc >= 30 && imc <= 35){
        description = 'Cuidado, você com obesidade grau 1, cuidado!'
    }else if (imc>= 35 && imc <= 40){
        description = 'Obesidade grau 2, cuidado!'
    }else{ 
        description = 'Obesidade grau 3, cuidado!'
    }

    value.innerText = imc.replace('.',',');
    document.getElementById('description').textContent = description;
  
   
    
})
