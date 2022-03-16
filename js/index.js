window.addEventListener('scroll', () => {
    const doc_h = $(document).height();
    const scr_top = $(document).scrollTop();
    const window_hei = $(window).height();
    if ((window_hei + scr_top) >= doc_h) {
        $("#myText").show();
    }else if(scr_top === 0){
        $("#myText").hide();
    }
});
