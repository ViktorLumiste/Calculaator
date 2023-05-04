import {Calculator} from "../calculator1";
//import {Calculator} from "../calculator2";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('simple input', ()=>{
    calcobj.pressButton('7');
    expect(calcobj.getPanelContents()).toBe("7");
});