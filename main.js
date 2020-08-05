function decode(image){

    //ver se 'muatvel
    image = findCodeBar(image);
    image = prepareImage(image);

    let contours = findContours(image);
    let features = getFeatures(contours);
    const classifier = statsForClassify(features);
    let symbols = classifySymbols(features, classifier);
    convertToBinary(symbols);

    return image;

}