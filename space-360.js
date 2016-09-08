/**
 * Created by Steffy on 9/3/2016.
 */
// $(function () {
//     $(".furniture-items").draggable({
//         onmove: window.dragMoveListener,
//         grid: [1, 1],
//         snap: "body",
//         snapMode: "outer",
//         helper: "clone"

var rooms = {
    'select': {
        'img': 'Furniture/see7.jpg',
        'desc': 'Item Description',
        'contains':{}
    },
    'bedroom': {
        'img': 'Furniture/finale.jpg',
        'desc': 'Item Description',
        'contains': {
            // 'fluffy sofa': qty: 1,
            // 'firm sofa': 1
        }
    },
    'bathroom': {
        'img': 'Furniture/trying8.jpg',
        'desc': 'Item Description',
        'contains': {}
    },
    'livingroom': {
        'img': 'Furniture/360med.jpg',
        'desc': 'Item Description',
        'contains': {}
    },
    'kitchen': {
        'img': 'Furniture/finale.jpg',
        'desc': 'Item Description',
        'contains': {}
    },
    'outdoor': {
        'img': 'Furniture/what.jpg',
        'desc': 'Item Description',
        'contains': {}
    },
    'laundry': {
        'img': 'Furniture/see7.jpg',
        'desc': 'Item Description',
        'contains': {}
    },
    'storage': {
        'img': 'Furniture/blank.jpg',
        'desc': 'Item Description',
        'contains': {}
    }
};

// console.log(rooms);

$('.room-changer').change(function(e){
    // console.log($('.room-changer option:selected').val());
    currentRoom = $('.room-changer option:selected').val();
    window.pic = rooms[currentRoom].img;
    initPano();
});

var currentRoom = 'bedroom';


function sidebarMaker() {
    $('.sidebar-items').empty();
    // will be empty when the screen loads.


    for (var room in rooms) {

        var thisRoom = rooms[room];

        var roomSidebar = document.createElement('div');
        roomSidebar.className = 'accordion';

        var roomSidebarTitle = document.createElement('h3');
        roomSidebarTitle.innerText = room;

        var roomSidebarContains = document.createElement('p');

        var roomItems = []; //Holder for items in room

        var isEmpty = true;

        for(var item in thisRoom['contains']){
            roomItems.push(
                thisRoom.contains[item] + "=" +
                item + "<br/>"

            );

            isEmpty = false;

        }



        // The above thing will make something like this
        //
        //     '5x fluffy sofa<br/>',
        //     '1x firm sofa<br/>'
        // ]

        // .join(" ") make that look like this:

        // '5x fluffy sofa<br/> 1x firm sofa</br>'

        roomSidebarContains.innerHTML =
            thisRoom.desc + "<br/>" + roomItems.join(" ");

        roomSidebar.appendChild(roomSidebarTitle);
        roomSidebar.appendChild(roomSidebarContains);

        if(isEmpty === false){
            document.querySelector('.sidebar-items').appendChild(roomSidebar);
        }
    }

    $(".accordion").accordion({
        collapsible: true
    });
}


$('.drag-item').draggable({
    helper: "clone",
    stop: function (event, ui) {
        droppedItem(event);
    }
});
$('.drag-item').bind('dragstop', function (event, ui) {
    console.log(currentRoom);
    var currentFurniture = $(this)[0].getAttribute('data-furniture');

    // rooms[currentRoom]['contains']

    if(rooms[currentRoom]['contains'][currentFurniture] > 0){
        rooms[currentRoom]['contains'][currentFurniture]++;
    }else{
        rooms[currentRoom]['contains'][currentFurniture] = 1;


    }

    sidebarMaker();


    $(this).after(
        $(ui.helper)
            .clone()
            .addClass('cloned')
            .removeClass('drag-item')
            .draggable({
                stop: function (event, ui) {
                    droppedItem(event);
                }
            })
            .resizable()
            .prepend(
                $("<span>", {
                    text: '×',
                    class: 'close'
                }).click(function () {
                    $(this).parent().remove();

                })
            )
    );

    // drop: function() {
    // }
});

function droppedItem(e) {
    console.log(e.pageX);
    console.log(e.pageY);
}

// });

// function convertImageToCanvas(image) {
//     var canvas = document.createElement("canvas");
//     canvas.width = image.width;
//     canvas.height = image.height;
//     canvas.getContext("2d").drawImage(image, 0, 0);
//
//     return canvas;
//
// }

$(document).ready(function () {
    $("button").click(function () {
        $(".dropdown-content a").toggle();
    });
});

$(document).ready(function () {
    $(".dropdown-content a").click(function () {
        $(".dropdown-content a").hide();
    });
});


$(".cc").click(function () {
    $(".drag-item").hide();
    $(".media-furniture").show();
});


$(".dd").click(function () {
    $(".drag-item").hide();
    $(".storage-furniture").show();
});

$(".ee").click(function () {
    $(".drag-item").hide();
    $(".coffee-table").show();
});

$(".zz").click(function () {
    $(".drag-item").hide();
    $(".none").show();
});


$(".aa").click(function () {
    $(".drag-item").hide();
    $(".furniture-items").show();
});


$(".bb").click(function () {
    $(".drag-item").hide();
    $(".arm-chair").show();
});

$(".ff").click(function () {
    $(".drag-item").hide();
    $(".lighting").show();
});

$(".kk").click(function () {
    $(".drag-item").hide();
    $(".mirrors").show();
});

//
// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//
//         reader.onload = function (e) {
//             $('#blah').attr('src', e.target.result);
//         };
//
//         reader.readAsDataURL(input.files[0]);
//     }
// }

// $("#imgInp").change(function () {
//     readURL(this);
// });

// $(document).ready(function() {
//     $(".active1").click(function () {
//         $(".active1").css({"background-color": "#3e8e41"});
//     });
// });

// Get the modal
var outer = document.getElementById('outerbox');


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
$('.close').click(function () {
    $(this).parent().fadeOut();
});

// When the user clicks the button, open the modal
btn.onclick = function () {
    outer.style.display = "block";
};


// document
//     .querySelector('.total p')
//     .addEventListener('click', function () {
//
//         var content = '<h2>Total Items:5</h2>' +
//             '<p>Item 1: Table with cover = $80</p>' +
//             '<p>Item 2: Table with cover = $80</p>' +
//             '<p>Taxes</p>' +
//             '<a href="google.com">Google</a>';
//
//         var infoBubble = new google.maps.InfoWindow({
//             'content': content
//         });
//     })

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.more').attr('src', e.target.result);
            window.pic = e.target.result;
            rooms[currentRoom].pic = e.target.result;
            initPano();
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function () {
    readURL(this);
});

// window.pic = "360med.jpg";

function initPano() {
    // Set up Street View and initially set it visible. Register the
    // custom panorama provider function. Set the StreetView to display
    // the custom panorama 'reception' which we check for below.
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('map'), {
            pano: 'reception',
            visible: true,
            panoProvider: getCustomPanorama
        });

    // panorama.setPov({
    //     'pitch': 0,
    //     'heading': 180
    // })

}

// Return a pano image given the panoID.
function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
    // Note: robust custom panorama methods would require tiled pano data.
    // Here we're just using a single tile, set to the tile size and equal
    // to the pano "world" size.

    return window.pic;
}

// Construct the appropriate StreetViewPanoramaData given
// the passed pano IDs.
function getCustomPanorama(pano, zoom, tileX, tileY) {
    if (pano === 'reception') {
        return {
            location: {
                pano: 'reception',
                description: 'Your Room'
            },
            links: [],
            // The text for the copyright control.
            copyright: 'Imagery (c) 2010 Google',
            // The definition of the tiles for this panorama.
            tiles: {
                tileSize: new google.maps.Size(2867, 1434),
                worldSize: new google.maps.Size(2867, 1434),
                // The heading in degrees at the origin of the panorama
                // tile set.
                centerHeading: 105,
                getTileUrl: getCustomPanoramaTileUrl
            }
        };
    }
}






