function decode(image){

    //ver se 'muatvel
    image = prepareImage(image);

    let contours = findContours(image);
    let features = getFeatures(contours);
    const classifier = statsForClassify(features);
    let symbols = classifySymbols(features, classifier);
    let binaryCode = convertToBinary(symbols);

    getResults(binaryCode);

    return image;

}