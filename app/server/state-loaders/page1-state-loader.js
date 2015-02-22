exports.getInitialState = function(req, done){
    console.log(req.params.subpage);
    var initial = {
        pageOne : {header: 'Page1', description:'This is page1', clickedBtn : "Btn1"}
    };

    done(initial);
};