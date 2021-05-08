var valor1, valor2, n1, n2;

function operacion2(){
valor1 = document.getElementById("n1").value;
valor2 = document.getElementById("n2").value;
n1 = parseInt(valor1);
n2 = parseInt(valor2);
alert("suma: "+(n1+n2)+"\n resta: "+(n1-n2)+"\n mult: "+(n1*n2)+"\n div: "+(n1/n2));

}


function operacion3(){
let cadena1,cadena2;
cadena1 = document.getElementById("let1").value;
cadena2 = document.getElementById("let2").value;
alert("La contenación es: "+(cadena1+cadena2));
}


const c1 = "texto de prueba";
const c2 = 666;

function operacion4(){
   
    
alert("Tipo de Dato 1 "+c1+" es tipo: "+typeof(c1)+"\n Tipo de Dato 2 "+c2+" es tipo: "+typeof(c2));

}

function operacion5(){
    var myCar = {
        year: 1969,
        make: 'Ford',
        model: true,   
        vacio: undefined
    };
    alert(myCar.year+"\n"+myCar.make+"\n"+myCar.model+"\n"+myCar.vacio);
}