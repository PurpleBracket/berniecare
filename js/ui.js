var form = $("#savings-calc");

form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex)
    {

    },
    onFinishing: function (event, currentIndex)
    {

    },
    onFinished: function (event, currentIndex)
    {
        alert("Submitted!");
    }
});
