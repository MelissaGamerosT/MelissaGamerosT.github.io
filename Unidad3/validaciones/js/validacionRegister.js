window.onload=()=>{

    var btnReg=document.getElementById("boton")
    let txtN= document.getElementById('txtNombre')//llamar por su id
    let txtT=document.querySelector("#txtTelefono")//llamamos id de otra forma 
    let txtEd=document.querySelector("#txtEdad")//el nombre tiene que se rigual que el js el de los parentesis
    let Pass=document.querySelector("#txPassword")
    let ConfiP=document.querySelector("#txConfirmar")
    let divAs=document.querySelector("#alertSucces")
    let divAa=document.querySelector("#alertt")

    btnReg.addEventListener('click',(evt)=>{
       evt.preventDefault()//para que era???

if(txtN.value==""||txtT.value==""||txtEd.value==""||Pass.value==""||ConfiP.value==""){
    divAa.innerHTML='Error: <br> <small>Porfis, llena todos los campos</small>'
    divAa.style.display="block"
}else{

       if(txtT.value.length<10){
            divAa.innerHTML='Error: <br> <small>solo telefono de 10 numeros</small>'
            divAa.style.display="block"
        }else{
        if(ConfiP.value!=Pass.value){
            divAa.innerHTML='Error <br> <small>password mal escrita, tiene que ser igual'
            divAa.style.display="block"
        }else{
            if(Pass.value.length<6&&ConfiP.value.length<6){
                divAa.innerHTML='Error: <br> <small>password debe ser mayor de 5</small>'
                divAa.style.display="block"
            }else{
                divAs.style.display="block" 
            }
        }/*TAMBIEN SE PUEDE ASI:
        else{
           if(Pass.value.length<5){
                divAa.innerHTML='Error: <br> <small>password debe ser mayor de 5</small>'
                divAa.style.display="block"
            }else{
                divAs.style.display="block" 
            }
    if(ConfiP.value.length==Pass.value.length){
            divAa.innerHTML='Error: <br> <small>password debe ser mayor de 5</small>'
            divAa.style.display="block"
        }else{
            divAs.style.display="block" 
        }*/
    }
}
    
    })

    txtT.addEventListener('focus',(evt)=>{
        divAa.style.display='none'
        divAs.style.display='none'
    })
    Pass.addEventListener('focus',(evt)=>{
        divAa.style.display='none'
        divAs.style.display='none'
    })                              
    ConfiP.addEventListener('focus',(evt)=>{
        divAa.style.display='none'
        divAs.style.display='none'
    })   
}