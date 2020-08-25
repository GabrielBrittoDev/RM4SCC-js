function decode(image){

    //ver se 'muatvel
    image = findCodeBar(image);
    return image;
    image = prepareImage(image);

    let contours = findContours(image);
    let features = getFeatures(contours);
    const classifier = statsForClassify(features);
    let symbols = classifySymbols(features, classifier);

    assertBars(symbols);
    return image;

}