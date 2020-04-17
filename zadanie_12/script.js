'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }    
    createDiv(textDiv, id) {
        let div = document.createElement('div'),
            style1 = `height:${this.height}px; width:${this.width}px; `,
            style2 = `background-color:${this.bg}; font-size:${this.fontSize}; `,
            style3 = `text-align:${this.textAlign};`,
            style4 = `padding:20px;`
        let fullStyle = `${style1} ${style2} ${style3} ${style4}`;
        
        console.log(`style: ${fullStyle}`);
        document.body.appendChild(div);
        div.textContent = textDiv;
        div.style.cssText = fullStyle;
        div.setAttribute('id', id);
    }
}

let newDiv1 = new Options(100, 200, '#ff0000', '20px', 'center'),
    newDiv2 = new Options(100, 200, '#0000ff', '20px', 'center'),
    btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    action1 = 'off',
    action2 = 'off';

btn1.addEventListener('click', function() {
    if (action1 == 'off') {
        newDiv1.createDiv('Текст для вставки 1', 'div1');
        action1 = 'active';
        return action1;
    } else {
        let div1 = document.getElementById('div1');
        document.body.removeChild(div1);
        action1 = 'off';
        return action1;
    }
});

btn2.addEventListener('click', function() {
    if (action2 == 'off') {
        newDiv2.createDiv('Текст для вставки 2', 'div2');
        action2 = 'active';
        return action2;
    } else {
        let div2 = document.getElementById('div2');
        document.body.removeChild(div2);
        action2 = 'off';
        return action2;
    }
});


