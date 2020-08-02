function prepareImage(image){
    let greyImage;
    cv.cvtColor(image, image, cv.COLOR_BGR2GRAY);

    cv.threshold(image,image,0,255,cv.THRESH_BINARY_INV+cv.THRESH_OTSU);

    let size = image.size();
    let heightPercent = size.height / 100;

    let rect = new cv.Rect(0, heightPercent * 20, size.width, heightPercent * 70);
    image = image.roi(rect);

    cv.medianBlur(image, image, 3);


    return image;
}


function findContours(image){
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    cv.findContours(image, contours, hierarchy, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE);

    return contours;
}