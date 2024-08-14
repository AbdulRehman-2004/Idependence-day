var btn = document.querySelectorAll(".nextprev-btn")

btn.forEach((e,index)=>
{
    e.addEventListener("click",()=>
    {
        const pageId = e.getAttribute("data-page");
        const pageTurn = document.getElementById(pageId);

        if(pageTurn.classList.contains("turn"))
        {
            pageTurn.classList.remove("turn")

            setTimeout(()=>
            {
                pageTurn.style.zIndex = 20-index;
            },500)
        }
        else
        {
            pageTurn.classList.add("turn") 
            setTimeout(()=>
            {
                pageTurn.style.zIndex = 20+index;
            },500)
        }
    })
})


const pages = document.querySelectorAll(".book-page.page-right")
let totalPages = pages.length;
let pageNumber = 0;
function reverseIndex()
{
    pageNumber--;
    if(pageNumber<0)
    {
        pageNumber = totalPages-1;
    }
}

var rightCover = document.querySelector(".cover-page-right")
var leftCover = document.querySelector(".page-left")
var vid = document.querySelector(".video video")

var tl= gsap.timeline();
tl.to("h1.head2",{
    opacity:1,
    delay:2,
    duration:0.5
})
tl.to(".loader .front",{
    opacity:0,
    delay:2.5,
    duration:1
})
.to(".loader .back",{
    opacity:1,
    duration:1, 
})
tl.to(".loader .back .head3",{
    display:"block",
    onStart:function(){
        $(".back .head3").scramble(4000, 20, "alphabet", true);
    }
})
tl.to(".loader .back .head4",{
    display:"block",
    onStart:function(){
        $(".back .head4").scramble(4000, 20, "alphabet", true);
    }
})
tl.to(".loader .back .head5",{
    display:"block",
    onStart:function(){
        $(".back .head5").scramble(4000, 20, "alphabet", true);
    }
})
.to(".loader .back",{
    opacity:0,
    delay:5.5,
    duration:0.5
})
tl.to(".container",{
    opacity:1,
    duration:1,
})
tl.to(".wrapper",{
    y:0,
    delay:1,
    duration:1
})
tl.to(rightCover,{
    delay:2,
    onStart:function()
    {
        rightCover.classList.add("turn")
    }
})
tl.to(rightCover,{
    onStart:function()
    {
        rightCover.style.zIndex = -1
    }
})
tl.to(pages,{
    onStart:function()
    {
        pages.forEach((_,index)=>
        {
        setTimeout(()=>
        {
            reverseIndex();
            pages[pageNumber].classList.remove("turn");

            setTimeout(()=>
            {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10+index;
            },500)
        },(index + 1) *100 +100);
        })
    }
})

document.querySelector("#conclusion video").addEventListener("click",()=>
{
    document.querySelector("#conclusion video").autoplay = true;
    document.querySelector("#conclusion video").load()
})

document.querySelector("#conclusion video").addEventListener("dblclick",()=>
{
    document.querySelector("#conclusion video").autoplay = false;
    document.querySelector("#conclusion video").load()
})

