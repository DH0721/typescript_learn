/**
 * Unknwon Type
 * 
 * - any 타입과 비슷하지만 any 타입보다는 안전하다.
 */

function UnknwonExam(){
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;
    let f: unknown = { name: "Alice", age: 30 };
    let g: unknown = [1, 2, 3];
   
}

/**
 * never Type
 * 
 * - 절대 발생하지 않는 값의 타입을 나타낸다.
 * - 함수가 예외를 throw 하거나 무한 루프에 빠지는 경우에 사용된다.
 */

function neverExam(){
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
}

/**
 * void Type
 * 
 * - 함수에서 아무것도 반환하지 않을 때 사용된다.
 * - 함수가 명시적으로 undefined를 반환하는 경우에도 사용될 수 있다.
 */

function voidExam(){
    function voidFunc(): void {
        console.log("This function returns nothing.");
        return undefined;
    }

    let voidVar: void = undefined;
}

/**
 * any Type
 * 
 * - 모든 타입을 허용하는 타입이다.
 * - 타입 검사를 우회할 때 사용되지만, 가능한 사용을 피하는 것이 좋다.
 */
function anyExam(){
    let a: any = 1;
    let b: any = "hello";
    let c: any = true;
    let d: any = null;
    let e: any = undefined;
    let f: any = { name: "Alice", age: 30 };
    let g: any = [1, 2, 3]; 

}
