const cursorDot= document.querySelector("[data-cursor-dot]");
const cursorOutline= document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    },{duration: 500, fill: "forwards"});
});
// window.addEventListener("scroll", function(){
//     var header = document.querySelector(".navv");
//     header.classList.toggle("sticky", window.scrollY> 0);
// });
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display='flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display='none';
}

