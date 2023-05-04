import {Calculator} from "../calculator1";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});


test('multiply', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    expect(calcobj.getPanelContents()).toBe("2");
});