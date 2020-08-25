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


function assertBars(bars){
    let confirm = true;

    confirm = bars[0] + bars[bars.size - 1] === 'AF';

    console.log(confirm)
    return confirm

}