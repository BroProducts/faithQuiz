var app = app || {}
app.version = '0.0.1'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

$(document).ready(function() {
    app.vm = new app.ViewModelMain()
    console.log(ko.toJS(app.vm))
    ko.applyBindings(app.vm);
    app.hidePreloader()
    $('.view-main').fadeIn()
})
