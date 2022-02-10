function clickedHeart(element) {
    if (!element.src.includes('heartred.svg')){
        element.setAttribute('src', '/assets/app/icons/heartred.svg');
    }else{
        element.setAttribute('src', '/assets/app/icons/heart.svg');
    }
}

function clickedDog() {
    const element = document.getElementById('profile-picture');
    if (!element.src.includes('medog.svg')){
        element.setAttribute('src', '/assets/app/social_media/medog.svg');
    }else{
        element.setAttribute('src', '/assets/app/social_media/me.svg');
    }
}