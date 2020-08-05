const lettersToNumber = {
    'FFF' : 0,
    'FFA' : 1,
    'FFD' : 2,
    'FFT' : 3,
    'FAF' : 4,
    'FAA' : 5,
    'FAD' : 6,
    'FAT' : 7,
    'FDF' : 8,
    'FDA' : 9,
    'FDD' : 10,
    'FDT' : 11,
    'FTF' : 12,
    'FTA' : 13,
    'FTD' : 14,
    'FTT' : 15,
    'AFF' : 16,
    'AFA' : 17,
    'AFD' : 18,
    'AFT' : 19,
    'AAF' : 20,
    'AAA' : 21,
    'AAD' : 22,
    'AAT' : 23,
    'ADF' : 24,
    'ADA' : 25,
    'ADD' : 26,
    'ADT' : 27,
    'ATF' : 28,
    'ATA' : 29,
    'ATD' : 30,
    'ATT' : 31,
    'DFF' : 32,
    'DFA' : 33,
    'DFD' : 34,
    'DFT' : 35,
    'DAF' : 36,
    'DAA' : 37,
    'DAD' : 38,
    'DAT' : 39,
    'DDF' : 40,
    'DDA' : 41,
    'DDD' : 42,
    'DDT' : 43,
    'DTF' : 44,
    'DTA' : 45,
    'DTD' : 46,
    'DTT' : 47,
    'TFF' : 48,
    'TFA' : 49,
    'TFD' : 50,
    'TFT' : 51,
    'TAF' : 52,
    'TAA' : 53,
    'TAD' : 54,
    'TAT' : 55,
    'TDF' : 56,
    'TDA' : 57,
    'TDD' : 58,
    'TDT' : 59,
    'TTF' : 60,
    'TTA' : 61,
    'TTD' : 62,
    'TTT' : 63
};


function convertToBinary(code){
    let numberCode = [];
    for (let i = 0; i < code.length; i += 3){
        let letters = code[i] + code[i + 1] + code[i+ 2];
        numberCode.push(lettersToNumber[letters]);
    }
    console.log(numberCode.toString());

    let binaryCode = [];
    for (let i = 0; i < numberCode.length;i++){
        if (i === 2 || i === 22) continue;
        let binary = numberCode[i].toString(2);
        for (let k = binary.length;k < 6;k++){
            binary = '0' + binary;
        }

        binaryCode.push(binary);
    }

    console.log(binaryCode.toString());

    return binaryCode;

}


function getResults(binaryCode){
    console.log(binaryCode);
    binaryCode.splice(2, 1);
    console.log(binaryCode);
    binaryCode.splice(22, 1);
    console.log(binaryCode);

    binaryCode = binaryCode.join('').split('');

    let results = {
        formatIdentifier : binaryCode.slice(0, 3),
        issuerCode : binaryCode.slice(4, 19),

    };

    console.log(results);
}