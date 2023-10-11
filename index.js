const tabs=document.querySelectorAll('[data-target]'),
      tabContent=document.querySelectorAll('[data-content]')
      tabs.forEach(tab=>{
        tab.addEventListener("click",()=>{
            const target=document.querySelector(tab.dataset.target)
            tabContent.forEach(tabContents =>{
                tabContents.classList.remove('skills_active')
            })
            target.classList.add('skills_active')
            tabs.forEach(tab =>{
                tab.classList.remove('skills_active')
            })
            tab.classList.add('skills_active')
        })
      })
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio_popup").classList.toggle("open")
}
document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp_thumbnail img").src=portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML=portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML=portfolioItem.querySelector(".portfolio_item-details").innerHTML;
    
    

}


    document.addEventListener('DOMContentLoaded', function() {
        var links = document.querySelectorAll('.nav a');
        
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                links.forEach(function(link) {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    });