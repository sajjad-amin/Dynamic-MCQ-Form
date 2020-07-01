function createHtmlElement(name, attributes, innerhtmls){
    let el = document.createElement(name);
    attributes.forEach(element => {
        el.setAttribute(element[0], element[1])
    })
    if (innerhtmls !== null) {
        el.innerHTML = innerhtmls
    }
    return el
}

function getQuestionCard(){
    let qCard = createHtmlElement('div',[['class','qCard']],null)
    let qCardHeader = createHtmlElement('div',[['class','card-header']],null)
    let qCardBody = createHtmlElement('div',[['class','card-body']],null)
    let qFormGroup = createHtmlElement('div',[['class','form-group']],null)
    let qFormRow1 = createHtmlElement('div',[['class','form-row']],null)
    let qCol1 = createHtmlElement('div',[['class','col']],null)
    qCol1.appendChild(createHtmlElement('textarea',[
        ['class', 'form-control question'],
        ['placeholder', 'Question'],
        ['rows', '3']
    ], null))
    let qCol2 = createHtmlElement('div',[['class','col']],null)
    qCol2.appendChild(createHtmlElement('input',[
        ['type', 'number'],
        ['class', 'form-control answer'],
        ['placeholder', 'Currect answer index']
    ], null))
    qFormRow1.appendChild(qCol1)
    qFormRow1.appendChild(qCol2)
    let qFormRow2 = createHtmlElement('div',[['class','form-row']],null)
    let qCol3 = createHtmlElement('div',[['class','col']],null)
    qCol3.appendChild(createHtmlElement('input',[
        ['type', 'text'],
        ['class', 'form-control option1'],
        ['placeholder', 'Option 1']
    ], null))
    let qCol4 = createHtmlElement('div',[['class','col']],null)
    qCol4.appendChild(createHtmlElement('input',[
        ['type', 'text'],
        ['class', 'form-control option2'],
        ['placeholder', 'Option 2']
    ], null))
    qFormRow2.appendChild(qCol3)
    qFormRow2.appendChild(qCol4)
    let qFormRow3 = createHtmlElement('div',[['class','form-row']],null)
    let qCol5 = createHtmlElement('div',[['class','col']],null)
    qCol5.appendChild(createHtmlElement('input',[
        ['type', 'text'],
        ['class', 'form-control option3'],
        ['placeholder', 'Option 3']
    ], null))
    let qCol6 = createHtmlElement('div',[['class','col']],null)
    qCol6.appendChild(createHtmlElement('input',[
        ['type', 'text'],
        ['class', 'form-control option4'],
        ['placeholder', 'Option 4']
    ], null))
    qFormRow3.appendChild(qCol5)
    qFormRow3.appendChild(qCol6)
    qFormGroup.appendChild(qFormRow1)
    qFormGroup.appendChild(document.createElement('br'))
    qFormGroup.appendChild(qFormRow2)
    qFormGroup.appendChild(document.createElement('br'))
    qFormGroup.appendChild(qFormRow3)
    qCardBody.appendChild(qFormGroup)
    qCard.appendChild(qCardHeader)
    qCard.appendChild(qCardBody)
    return qCard;
}