function datos(){
    var nombre = document.getElementById('nombre').value
    var documento = parseInt(document.getElementById('documento').value)
    var nummaterias = parseInt(document.getElementById('nummaterias').value)
    var valormaterias = parseInt(document.getElementById('valormaterias').value)
    var totalmate
    var total
    var pagar

val = 0
suma = 0
c = 0
pape = 20000
carnet = 8000

console.log('Los datos ingresados fueron: ', nombre,'  ', documento)
console.log('El numero de materias es: ', nummaterias)


while(nummaterias != suma){
    val = val + valormaterias
    suma = suma + 1
}

console.log('El valor de las materias es: ', val)

//Se agrega el 20% de descuento
totalmate = ((val*20)/100)
total = val - totalmate

alert('El costo de papeleria es de $20.000 y del carnet es de $8000')

console.log('El descuento del 20% es: ', totalmate)
pagar = total + pape + carnet

console.log('El total a pagar es: ', pagar)

}


function organizador(){
    //var num1 = parseInt(document.getElementById('num1').value)
    //var num2 = parseInt(document.getElementById('num2').value)
    //var num3 = parseInt(document.getElementById('num3').value)
    //var num4 = parseInt(document.getElementById('num4').value)

    num1 = prompt('Ingrese el primer numero')
    num2 = prompt('Ingrese el segundo numero')
        while(num1 == num2){
            num2 = prompt('Ingrese nuevo valor para el segundo numero')
        }
    num3 = prompt('Ingrese el tercer numero')

        while(num3 == num1 || num3 == num2){
            num3 = prompt('Ingrese nuevo valor para el tercer numero')
        }
    num4 = prompt('Ingrese el cuarto numero')
        while(num4 == num1 || num4 == num2 || num4 == num3){
            num4 = prompt('Ingrese nuevo valor para el cuarto numero')
        }

 console.log('Los numeros ingresados son: ', num1, num2, num3, num4)

if(num1>num2 && num1>num3 && num1>num4){
    console.log('El numero mayor es:', num1)
}else{
    if(num2>num1 && num2>num3 && num2>num4){
        console.log('El numero mayor es:', num2)
    }else{
        if(num3>num1 && num3>num2 && num3>num4){
            console.log('El numero mayor es:', num3)
        }else{
            console.log('El numero mayor es:', num4)
        }
    }
}

if(num1<num2 && num1<num3 && num1<num4){
    console.log('El numero menor es:', num1)
}else{
    if(num2<num1 && num2<num3 && num2<num4){
        console.log('El numero menor es:', num2)
    }else{
        if(num3<num1 && num3<num2 && num3<num4){
            console.log('El numero menor es:', num3)
        }else{
            console.log('El numero menor es:', num4)
        }
    }
}

        }


    
