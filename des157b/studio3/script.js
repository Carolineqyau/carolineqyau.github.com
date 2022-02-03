document.querySelector('#granim-canvas')

// var granimInstance = new Granim({
//     element: '#granim-canvas',
//     name: 'granim',
//     opacity: [1, 1],
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#834D9B', '#D04ED6'],
//                 ['#1CD8D2', '#93EDC7']
//             ]
//         }
//     }
//  });

var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

//methods
fullpage_api.setAllowScrolling(false);