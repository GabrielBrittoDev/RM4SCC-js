function decode(image){

    //ver se 'muatvel
    image = findCodeBar(image);
    image = prepareImage(image)

    let contours = findContours(image);
    let features = getFeatures(contours);
    const classifier = statsForClassify(features);
    let symbols = classifySymbols(features, classifier);

    if (assertBars(symbols)){
        console.log('Translated code: ', translateBarsToCode(symbols));
    } else {
        console.log('Assertion failed');
    }
    return image;

}