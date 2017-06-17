(function() {
    'use strict';

    function Truncate() {
        this.value = '';
        this.length = 200;
    }

    Truncate.prototype.init = function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var self = ko.bindingHandlers.truncate;
        var values = ko.unwrap( valueAccessor());
        if (typeof values === 'string') {
            self.value = values;
        } else {
            self.value = values.value;
            self.length = values.length;
        }

        self.stripTags();
        self.reduceText();
        element.innerText = self.value;
    };

    Truncate.prototype.update = function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var self = ko.bindingHandlers.truncate;
        var values = ko.unwrap( valueAccessor());
        if (typeof values === 'string') {
            self.value = values;
        } else {
            self.value = values.value;
            self.length = values.length;
        }
        
        self.stripTags();
        self.reduceText();
        element.innerText = self.value;
    };

    Truncate.prototype.stripTags = function() {
        var element = document.createElement("div");
        element.innerHTML = this.value;
        this.value = element.textContent || element.innerText || "";
        this.value = this.value.trim();
    };

    Truncate.prototype.reduceText = function() {
        this.value = this.value.length > this.length ? this.value.substr(0, this.length) : this.value;
    };

    ko.bindingHandlers.truncate = new Truncate();

})();
