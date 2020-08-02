function getFeatures(contours){
    let features = [];
    for (let i = 0;i < contours.size();i++){
        let feature = cv.boundingRect(contours.get(i));
        let points = getExtremePoint(contours.get(i))
        feature.minY = points.minY;
        feature.maxY = points.maxY;
        features.push(feature);
    }


    features.sort(function(a,b){
       if (a.x > b.x)
           return 1;
        if (a.x < b.x)
            return -1;
        return 0;
    });

    return features;
}

function getExtremePoint(contour){
    arr = [];
    for (let i = 0; i < contour.rows; i++) {
        arr.push({x:contour.data32S[i*2],y:contour.data32S[i*2+1]});
    }

    return {maxY: findMaxPointY(arr).y, minY: findMinPointY(arr).y};

}

function findMaxPointY(arr){
    let y=[];
    for(let i=0;i<arr.length;i++){
        y[i]=arr[i].y;
    }
    let MaxPos=y.indexOf(Math.max(...y));
    return arr[MaxPos];
}
function findMinPointY(arr){
    let x=[];
    for(let i=0;i<arr.length;i++){
        x[i]=arr[i].y;
    }
    let MinPos=x.indexOf(Math.min(...x));
    return arr[MinPos];
}

function statsForClassify(features){
    let minObjs = [], maxObjs = [];
    for (let i = 0; i < 3; i++){
        maxObjs.push(_.maxBy(features, 'height'));
        minObjs.push(_.minBy(features, 'height'));
    }
    let minMean = _.meanBy(minObjs, 'height');
    let maxMean = _.meanBy(maxObjs, 'height');
    let maxYMean = _.meanBy(features, 'maxY');
    let minYMean = _.meanBy(features, 'minY');

    return (feature) => {
        let height = feature.height;
        if (height >= maxMean - ((maxMean / 100) * 14))
            return 'F';

        if (feature.maxY >= maxYMean)
            return 'D';

        if (feature.minY <= minYMean)
            return 'A';

        return 'T';
    }
}

function classifySymbols(features, classifier){
    let code = [];
    for (let feature of features){
        code.push(classifier(feature));
    }
    console.log(code.toString());
    return code;


}