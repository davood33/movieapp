document.querySelector('.download-btn').addEventListener('click' ,DownloadAnimation);
function DownloadAnimation(){
    const arrow = document.getElementById('arrow');
    if(arrow.classList.contains("rotate")){
        arrow.classList.remove("rotate");
    }
    else{
        arrow.classList.add("rotate");
    }
    const dlBox = document.getElementById('dl-box');
    if(dlBox.classList.contains("dl-box-anime")){
        dlBox.classList.remove("dl-box-anime");
    }
    else{
        dlBox.classList.add("dl-box-anime");
    }
}