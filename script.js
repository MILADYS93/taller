function obtenerSeleccion() {
    const seleccion = prompt("Seleccione una opción: \n1 Ordenar números de menor a mayor Y mayor a menor\n2 Area de una circunferencia\n3 Tipo de triángulo\n4 Verificar si dos números son amigos\n5 Calcule el valor de compra\n6 Calcule la nota final del estudiante \n7 salir ");

    return parseInt(seleccion);
}

const ejercicios = [
    "Ordenar números de menor a mayor Y mayor a menor",
    "Area de una circunferencia",
    "Tipo de triángulo",
    "Verificar si dos números son amigos",
    "Calcule el valor de compra",
    "Calcule la nota final del estudiante",
    "Salir"
];
function ejecutarEjercicio(ejercicio) {
    if (ejercicio === ejercicios.length) {

        return false;
    }


    const ejercicioSeleccionado = ejercicios[ejercicio - 1];
    if (ejecuciones[ejercicioSeleccionado]) {
        ejecuciones[ejercicioSeleccionado]++;
    } else {
        ejecuciones[ejercicioSeleccionado] = 1;
    }
    console.log(`\nEjecutando ${ejercicioSeleccionado}`);

    switch (ejercicio) {
        case 1: NumerosOrdenados()
            break;
        
        case 2: AreaCirculo()
            break;
        case 3: TipoTriangulo()
            break;
        case 4: NumerosAmigos()
            break;
        case 5: CompraProductos()
            break;
        case 6: Notas()
            break;

    }
    return true;
}
const ejecuciones = {};

function mostrarMenu() {
    console.log("\n--- Menú ---");
    for (let i = 0; i < ejercicios.length; i++) {
        console.log(`${i + 1}. ${ejercicios[i]}`);
    }
    console.log("-------------");
}


function NumerosOrdenados() {
    let NUmerosmenores,NumeroMayores;
    let NumeroUno = prompt("ingrese el primer numero");
    let NumeroDos = prompt("ingrese el segundo numero");
    let NumeroTres = prompt("ingrese el tercer numero");
    if (NumeroUno <= NumeroDos) {

        if (NumeroUno <= NumeroTres) {
           NUmerosmenores = NumeroUno;

            if (NumeroDos <= NumeroTres) {
                NUmerosmenores += ", " + NumeroDos + ", " + NumeroTres;
                NumeroMayores = NumeroTres + ", " + NumeroDos + ", " + NumeroUno;
            } else {
                NUmerosmenores += ", " + NumeroTres + ", " + NumeroDos;
                NumeroMayores = NumeroDos + ", " + NumeroTres + ", " + NumeroUno;
            }
        } else {
            NUmerosmenores= NumeroTres + ", " + NumeroUno + ", " + NumeroDos;
           NumeroMayores = NumeroDos + ", " + NumeroUno + ", " + NumeroTres;
        }
    } else {

        if (NumeroDos <= NumeroTres) {
            NUmerosmenores = NumeroDos;

            if (NumeroUno <= NumeroTres) {
               NUmerosmenores += ", " + NumeroUno + ", " + NumeroTres;
               NumeroMayores = NumeroTres + ", " + NumeroUno + ", " + NumeroDos;
            } else {
                NUmerosmenores += ", " + NumeroTres + ", " + NumeroUno;
               NumeroMayores= NumeroUno + ", " + NumeroTres + ", " + NumeroDos;
            }
        } else {
           NUmerosmenores = NumeroTres + ", " + NumeroDos + ", " + NumeroUno;
            NumeroMayores= NumeroUno + ", " + NumeroDos + ", " + NumeroTres;
        }
    }
    
    console.log("Ordenados de menor a mayor: " + NUmerosmenores);
    console.log("Ordenados de mayor a menor: " + NumeroMayores);

}
function AreaCirculo() {

    let RadioCirculo = Number(prompt("ingrese el radio del circulo"));
    let Areacirculo = (RadioCirculo * RadioCirculo) * 3.14;

    console.log(`el area del circulo es ${Areacirculo}`);
}
function TipoTriangulo() {
    let ladoUno = parseInt(prompt('Ingrese primer lado:'));
    let ladoDos = parseInt(prompt('Ingrese segundo lado:'));
    let ladoTres = parseInt(prompt('Ingrese tercer lado:'));
    if (ladoUno == ladoDos && ladoUno == ladoTres) {
        console.log('Triángulo equilatero.');

    } else {
        if (ladoUno == ladoDos || ladoUno == ladoTres || ladoDos == ladoTres) {
            console.log('Triángulo isósceles.');

        } else {
            console.log('Triángulo escaleno.');

        }
    }
}
function NumerosAmigos() {
    function divisores(numeros) {
        let a = 1;
        let b = 0;
        let l = new Array();
        while (a < numeros) {
            let h = numeros % a;
            if (h == 0) {
                l[b] = a;
                b++;
            }
            a++;
        }
        return l;
    }

    function suma(L) {
        let lg = L.length;
        let a = 0;
        let sumar = 0;
        while (a < lg) {
            sumar = sumar + L[a];
            a++;
        }
        return sumar;
    }

    PrimerNumero = prompt('Introduce el primer numero:');
    SegundoNumero = prompt('Introduce el segundo numero:');
    L1 = divisores(PrimerNumero);
    L2 = divisores(SegundoNumero);
    s1 = suma(L1);
    s2 = suma(L2);

    if (s1 == SegundoNumero && s2 == PrimerNumero) {
        console.log('Los numeros son amigos');
    } else {
        console.log('Los numeros no son amigos');
    }
}
function CompraProductos() {
    let cantidadproductos = (prompt("ingrese la cantidad de productos "));
    let valorproductos = (prompt("ingrese el valor del productos"));
    let valorCompra = cantidadproductos * valorproductos
    let iva = valorCompra * 0.19
    console.log(`el valor de la compra es ${valorCompra}`);
    console.log(`el valor del iva es ${iva}`)
    if (valorCompra > 500000) {
        console.log((valorCompra + 0.19));

    } else if (valorCompra > 1000000) {
        console.log((valorCompra - 0.10));
    }
}