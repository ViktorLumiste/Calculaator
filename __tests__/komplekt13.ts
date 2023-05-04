import {Calculator} from "../calculator1";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('floating point', ()=>{
    calcobj.pressButton('5');
    calcobj.pressButton('/');
    calcobj.pressButton('3');
    calcobj.pressButton('=');
    expect(parseFloat(calcobj.getPanelContents())).toBeCloseTo(1.6666666, 6);
});