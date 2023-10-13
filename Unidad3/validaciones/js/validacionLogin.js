window.onload=()=>{
    //detectar cuando pagina inicio esten cargandos en paginas el codigo scritp se haya cargado 
    var btn=document.getElementById("btnLogin")

    let txtE= document.getElementById('txtEmail')//llamar por su id
    let txtP=document.querySelector("#txtPassword")//llamamos id de otra forma
    let divA=document.querySelector("#alert")//el nombre tiene que se rigual que el js el de los parentesis
    let divAS=document.querySelector("#alertSuccess")

    btn.addEventListener('click',(evt)=>{
        evt.preventDefault()

       
        if(txtE.value== "" || txtP.value ==""){
            divA.innerHTML='Error: <br> <small>favor de llenar los campos</small>'//estoy cambiando conetido o html dentro de la equieta
        divA.style.display="block"//style:para obtner estilo display accedo a propiedad y block par que se vea
        }else{
        if(txtP.value.length<5){
            divA.innerHTML='Error: <br> <small>password debe ser mayor de 5</small>'
            divA.style.display="block"
        }else{
            divAS.style.display="block" 
        }
        }
    })

    txtE.addEventListener('focus',(evt)=>{
        divA.style.display='none'
        divAS.style.display='none'
    })
    txtP.addEventListener('focus',(evt)=>{
        divA.style.display='none'
        divAS.style.display='none'
            })
  
}