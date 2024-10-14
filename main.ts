/**
 * PCA9685
 */
//% weight=100 color=#0fbc11 icon="\uf1ec"
namespace pruebasuma {
    //% block
    export function sumando(num1 : number, num2 : number) : number{
        let resultado = num1 + num2;
        return resultado;
    }
    //% block
    export function pruebapins(num1 : number) : number{
        pins.digitalWritePin(DigitalPin.P1, 1);
        return num1+1:
    }    
}
