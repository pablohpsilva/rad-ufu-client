//
// Singleton que implementa o padrão event aggregator, fornece um módulo de
// publish/subscribe para os outros módulos
//
define(function() {
    return _.extend({}, Backbone.Events);
});