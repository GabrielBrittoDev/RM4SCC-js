const barsToCode = {
    'TTFF' : 0,
    'TDAF' : 1,
    'TDFA' : 2,
    'DTAF' : 3,
    'DTFA' : 4,
    'DDAA' : 5,
    'TADF' : 6,
    'TFTF' : 7,
    'TFDA' : 8,
    'DATF' : 9,
    'DADA' : 'A',
    'DFTA' : 'B',
    'TAFD' : 'C',
    'TFAD' : 'D',
    'TFFT' : 'E',
    'DAAD' : 'F',
    'DAFT' : 'G',
    'DFAT' : 'H',
    'ATDF' : 'I',
    'ADTF' : 'J',
    'ADDA' : 'K',
    'FTTF' : 'L',
    'FTDA' : 'M',
    'FDTA' : 'N',
    'ATFD' : 'O',
    'ADAD' : 'P',
    'ADFT' : 'Q',
    'FTAD' : 'R',
    'FTFT' : 'S',
    'FDAT' : 'T',
    'AADD' : 'U',
    'AFTD' : 'V',
    'AFDT' : 'W',
    'FATD' : 'X',
    'FADT' : 'Y',
    'FFTT' : 'Z',
};


function translateBarsToCode(bars){
    let code = [];
    for (let i = 1; i < bars.length - 2; i += 4){
        code.push(barsToCode[bars[i] + bars[i + 1] + bars[i + 2] + bars[i + 3]]);
    }

    return code;

}

function assertBars(bars){
    let confirm = true;

    confirm = bars[0] + bars[bars.size - 1] !== 'AF' || confirm;

    confirm = (bars.length - 2) % 4 !== 0 || confirm;

    return confirm

}