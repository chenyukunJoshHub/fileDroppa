System.register(["angular2/src/facade/lang", "angular2/src/core/di"], function(exports_1) {
    var lang_1, di_1;
    var ON_WEB_WORKER, WebWorkerElementRef, WebWorkerTemplateCmd, WebWorkerTextCmd, WebWorkerNgContentCmd, WebWorkerBeginElementCmd, WebWorkerEndElementCmd, WebWorkerBeginComponentCmd, WebWorkerEndComponentCmd, WebWorkerEmbeddedTemplateCmd;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (di_1_1) {
                di_1 = di_1_1;
            }],
        execute: function() {
            exports_1("ON_WEB_WORKER", ON_WEB_WORKER = lang_1.CONST_EXPR(new di_1.OpaqueToken('WebWorker.onWebWorker')));
            WebWorkerElementRef = (function () {
                function WebWorkerElementRef(renderView, boundElementIndex) {
                    this.renderView = renderView;
                    this.boundElementIndex = boundElementIndex;
                }
                return WebWorkerElementRef;
            })();
            exports_1("WebWorkerElementRef", WebWorkerElementRef);
            WebWorkerTemplateCmd = (function () {
                function WebWorkerTemplateCmd() {
                }
                WebWorkerTemplateCmd.prototype.visit = function (visitor, context) { return null; };
                return WebWorkerTemplateCmd;
            })();
            exports_1("WebWorkerTemplateCmd", WebWorkerTemplateCmd);
            WebWorkerTextCmd = (function () {
                function WebWorkerTextCmd(isBound, ngContentIndex, value) {
                    this.isBound = isBound;
                    this.ngContentIndex = ngContentIndex;
                    this.value = value;
                }
                WebWorkerTextCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitText(this, context);
                };
                return WebWorkerTextCmd;
            })();
            exports_1("WebWorkerTextCmd", WebWorkerTextCmd);
            WebWorkerNgContentCmd = (function () {
                function WebWorkerNgContentCmd(index, ngContentIndex) {
                    this.index = index;
                    this.ngContentIndex = ngContentIndex;
                }
                WebWorkerNgContentCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitNgContent(this, context);
                };
                return WebWorkerNgContentCmd;
            })();
            exports_1("WebWorkerNgContentCmd", WebWorkerNgContentCmd);
            WebWorkerBeginElementCmd = (function () {
                function WebWorkerBeginElementCmd(isBound, ngContentIndex, name, attrNameAndValues, eventTargetAndNames) {
                    this.isBound = isBound;
                    this.ngContentIndex = ngContentIndex;
                    this.name = name;
                    this.attrNameAndValues = attrNameAndValues;
                    this.eventTargetAndNames = eventTargetAndNames;
                }
                WebWorkerBeginElementCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitBeginElement(this, context);
                };
                return WebWorkerBeginElementCmd;
            })();
            exports_1("WebWorkerBeginElementCmd", WebWorkerBeginElementCmd);
            WebWorkerEndElementCmd = (function () {
                function WebWorkerEndElementCmd() {
                }
                WebWorkerEndElementCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitEndElement(context);
                };
                return WebWorkerEndElementCmd;
            })();
            exports_1("WebWorkerEndElementCmd", WebWorkerEndElementCmd);
            WebWorkerBeginComponentCmd = (function () {
                function WebWorkerBeginComponentCmd(isBound, ngContentIndex, name, attrNameAndValues, eventTargetAndNames, templateId) {
                    this.isBound = isBound;
                    this.ngContentIndex = ngContentIndex;
                    this.name = name;
                    this.attrNameAndValues = attrNameAndValues;
                    this.eventTargetAndNames = eventTargetAndNames;
                    this.templateId = templateId;
                }
                WebWorkerBeginComponentCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitBeginComponent(this, context);
                };
                return WebWorkerBeginComponentCmd;
            })();
            exports_1("WebWorkerBeginComponentCmd", WebWorkerBeginComponentCmd);
            WebWorkerEndComponentCmd = (function () {
                function WebWorkerEndComponentCmd() {
                }
                WebWorkerEndComponentCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitEndComponent(context);
                };
                return WebWorkerEndComponentCmd;
            })();
            exports_1("WebWorkerEndComponentCmd", WebWorkerEndComponentCmd);
            WebWorkerEmbeddedTemplateCmd = (function () {
                function WebWorkerEmbeddedTemplateCmd(isBound, ngContentIndex, name, attrNameAndValues, eventTargetAndNames, isMerged, children) {
                    this.isBound = isBound;
                    this.ngContentIndex = ngContentIndex;
                    this.name = name;
                    this.attrNameAndValues = attrNameAndValues;
                    this.eventTargetAndNames = eventTargetAndNames;
                    this.isMerged = isMerged;
                    this.children = children;
                }
                WebWorkerEmbeddedTemplateCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitEmbeddedTemplate(this, context);
                };
                return WebWorkerEmbeddedTemplateCmd;
            })();
            exports_1("WebWorkerEmbeddedTemplateCmd", WebWorkerEmbeddedTemplateCmd);
        }
    }
});
//# sourceMappingURL=api.js.map