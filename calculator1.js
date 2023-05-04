"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.a = "";
        this.b = "";
        this.c = "";
        this.ready = false;
    }
    Calculator.prototype.pressButton = function (d) {
        if (d == 'C') {
            this.a = '';
            this.b = '';
            this.c = '';
            this.ready = false;
        }
        else if (d == '=') {
            this.ready = true;
        }
        else if (isNaN(Number(d))) {
            console.log("before");
            console.log(this.b);
            this.b = d;
            console.log("after");
            console.log(this.b);
        }
        else if (this.b == '') {
            this.a += d;
        }
        else if (this.b != '') {
            this.c += d;
        }
    };
    Calculator.prototype.getPanelContents = function () {
        var ans = '';
        if (this.ready) {
            if (this.b == 'X') {
                this.a = (Number(this.a) * Number(this.c)).toString();
            }
            else if (this.b == '+') {
                this.a = (Number(this.a) + Number(this.c)).toString();
            }
            else if (this.b == '-') {
                this.a = (Number(this.a) - Number(this.c)).toString();
            }
            else if (this.b == '/') {
                this.a = (Number(this.a) / Number(this.c)).toString();
            }
            this.b = '';
            this.c = '';
            this.ready = false;
            return this.a;
        }
        else {
            if (this.c == '') {
                ans = this.a;
            }
            else if (this.b != '' && this.c != '') {
                ans = this.c;
            }
            return ans;
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
