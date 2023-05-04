class Calculator{
    protected a = "";
    protected b = "";
    protected c = "";
    protected ready = false;
    pressButton(d:string):void{
        if (d == 'C'){
            this.a = ''
            this.b = ''
            this.c = ''
            this.ready = false
        }else if (d == '='){
            this.ready = true
        }else if (isNaN(Number(d))) {
            this.b = d
        }else if(this.b == '') {
            this.a += d
        }else if (this.b != '') {
            this.c += d
        }
    }
    getPanelContents():string {
        let ans = ''
        if (this.ready) {
            if (this.b == 'X') {
                this.a = (Number(this.a) * Number(this.c)).toString()
            } else if (this.b == '+') {
                this.a = (Number(this.a) + Number(this.c)).toString()
            } else if (this.b == '-') {
                this.a = (Number(this.a) - Number(this.c)).toString()
            }else if (this.b == '/'){
                this.a = (Number(this.a) / Number(this.c)).toString()
            }
            this.b = ''
            this.c = ''
            this.ready = false
            return this.a
        }else {
        if (this.c == ''){
            ans = this.a
        } else if (this.b != '' && this.c !=''){
            ans = this.c
        }
        return ans
        }
    }
}

export{
    Calculator
}