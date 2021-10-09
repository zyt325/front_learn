window.onload = function() {
    var btnLeft = document.getElementById('btnLeft');
    var btnLefts = btnLeft.children

    var btnRight = document.getElementById('btnRight');
    var btnRights = btnRight.children

    var leftList = document.getElementById('leftList');
    var rightList = document.getElementById('rightList');

    function moveOpt(src, dest, action) {
        var selectedItems = [];
        console.log(src, dest, action);
        src.appli
        switch (action) {
            case 'single':
                console.log('single');
                selectedIndex = src.selectedIndex;
                if (selectedIndex != '-1') {
                    dest.appendChild(src[selectedIndex])
                }
                break;
            case 'multi':
                console.log('multi');
                selectedItems = [];
                for (var i = 0; i < src.length; i++) {
                    if (src[i].selected) {
                        selectedItems.push(src[i])
                    }
                }
                for (var j = 0; j < selectedItems.length; j++) {
                    dest.appendChild(selectedItems[j])
                }
                break
            case 'all':
                console.log('all');
                selectedItems = [];
                for (var i = 0; i < src.length; i++) {
                    selectedItems.push(src[i])
                }
                for (var j = 0; j < selectedItems.length; j++) {
                    dest.appendChild(selectedItems[j])
                }
                break
        }
    }
    for (var i = 0; i < btnLefts.length; i++) {
        // btnLefts[i].onclick = moveOpt(leftList, rightList, this.name);
        btnLefts[i].onclick = function() {
            moveOpt(leftList, rightList, this.name)
        }
    }
    for (var i = 0; i < btnRights.length; i++) {
        btnRights[i].onclick = function() {
            moveOpt(rightList, leftList, this.name)
        }
    }

}