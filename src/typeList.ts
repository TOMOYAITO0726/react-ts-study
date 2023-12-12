/**eslint-disable @typescript-eslint/no-unused-vars  */

/**TypeScriptの基本の型 */

// boolean
let bool: boolean = true; //boolという変数にtrueが代入される


// number 数値
let num: number = 0;

// string　文字
let str: string = "A";

// Array 配列
let arr1:  Array<number> = [0, 1, 2]; //どちらでもよい
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"]; //使用頻度低い numberとstringの順に型を指定して入れる

// any 
let any1: any = false; //any型は型チェックを無視するためどんな型でも代入できる、なるべく使わないほうがよい
 
// void
const funcA = (): void => { //funcAは関数名、(): voidは関数の型、
    const test = "TEST";  //変数宣言(TESTが初期値)
}                         //関数が何も返していないのでvoid型となる、書かなくてもよい

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined; //: undefinedは、変数の型を明示的に指定する構文,
                                        //TypeScript の機能で、変数の型を明確にするために使用

// object
let obj1: object = {}; //使用頻度少ない
let obj2: { id: number, name: string } = { id: 0, name:"AAA"} ;//idプロパティはnumber型、nameプロパティはstring型でることを明示
