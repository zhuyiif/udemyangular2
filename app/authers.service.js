System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthersService;
    return {
        setters:[],
        execute: function() {
            AuthersService = (function () {
                function AuthersService() {
                }
                AuthersService.prototype.getAuthers = function () {
                    return ["Zack", "judy", "Jessi"];
                };
                return AuthersService;
            }());
            exports_1("AuthersService", AuthersService);
        }
    }
});
//# sourceMappingURL=authers.service.js.map