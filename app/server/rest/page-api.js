module.exports = {
    getPageOneData : function(pageId,cb){
        setTimeout(function(){
            cb(undefined, {pageOne : {header: 'Page1', description:'This is page1', clickedBtn : (pageId > 0 && pageId < 5) ? ('btn' + pageId) : 'Unkown'}});
        },250);
    }
};

