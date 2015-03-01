module.exports = {
    getPageOneData : function(pageId,cb){
        setTimeout(function(){
            cb(undefined, {header: 'Page'+pageId, description:'This is page'+pageId, content : 'Lorum ipsum '+ pageId+ 'Lorum ipsum '+ pageId+ 'Lorum ipsum'});
        },250);
    },
    getPageTwoData : function(cb){
        setTimeout(function(){
            cb(undefined,  {header: 'Page2', description:'This is page2'});
        },250);
    }
};

