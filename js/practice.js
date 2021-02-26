let $container = $('#container');

$container
    .velocity({ top: "10vh" }, { duration: 1000 })
    .velocity({ left: "10vw" }, { duration: 1000, delay: 1000});