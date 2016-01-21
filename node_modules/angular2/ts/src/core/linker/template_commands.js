System.register(['angular2/src/facade/lang', 'angular2/src/facade/exceptions', 'angular2/src/core/render/api', 'angular2/src/core/metadata'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var lang_1, exceptions_1, api_1, metadata_1;
    var CompiledHostTemplate, CompiledComponentTemplate, EMPTY_ARR, TextCmd, NgContentCmd, IBeginElementCmd, BeginElementCmd, EndElementCmd, BeginComponentCmd, EndComponentCmd, EmbeddedTemplateCmd;
    function visitAllCommands(visitor, cmds, context) {
        if (context === void 0) { context = null; }
        for (var i = 0; i < cmds.length; i++) {
            cmds[i].visit(visitor, context);
        }
    }
    exports_1("visitAllCommands", visitAllCommands);
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
                exports_1({
                    "ViewEncapsulation": metadata_1_1["ViewEncapsulation"]
                });
            }],
        execute: function() {
            /**
             * A compiled host template.
             *
             * This is const as we are storing it as annotation
             * for the compiled component type.
             */
            CompiledHostTemplate = (function () {
                function CompiledHostTemplate(template) {
                    this.template = template;
                }
                CompiledHostTemplate = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [CompiledComponentTemplate])
                ], CompiledHostTemplate);
                return CompiledHostTemplate;
            })();
            exports_1("CompiledHostTemplate", CompiledHostTemplate);
            /**
             * A compiled template.
             */
            CompiledComponentTemplate = (function () {
                function CompiledComponentTemplate(id, changeDetectorFactory, commands, styles) {
                    this.id = id;
                    this.changeDetectorFactory = changeDetectorFactory;
                    this.commands = commands;
                    this.styles = styles;
                }
                CompiledComponentTemplate = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [String, Function, Array, Array])
                ], CompiledComponentTemplate);
                return CompiledComponentTemplate;
            })();
            exports_1("CompiledComponentTemplate", CompiledComponentTemplate);
            EMPTY_ARR = lang_1.CONST_EXPR([]);
            TextCmd = (function () {
                function TextCmd(value, isBound, ngContentIndex) {
                    this.value = value;
                    this.isBound = isBound;
                    this.ngContentIndex = ngContentIndex;
                }
                TextCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitText(this, context);
                };
                TextCmd = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [String, Boolean, Number])
                ], TextCmd);
                return TextCmd;
            })();
            exports_1("TextCmd", TextCmd);
            NgContentCmd = (function () {
                function NgContentCmd(index, ngContentIndex) {
                    this.index = index;
                    this.ngContentIndex = ngContentIndex;
                    this.isBound = false;
                }
                NgContentCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitNgContent(this, context);
                };
                NgContentCmd = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [Number, Number])
                ], NgContentCmd);
                return NgContentCmd;
            })();
            exports_1("NgContentCmd", NgContentCmd);
            IBeginElementCmd = (function (_super) {
                __extends(IBeginElementCmd, _super);
                function IBeginElementCmd() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(IBeginElementCmd.prototype, "variableNameAndValues", {
                    get: function () { return exceptions_1.unimplemented(); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(IBeginElementCmd.prototype, "eventTargetAndNames", {
                    get: function () { return exceptions_1.unimplemented(); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(IBeginElementCmd.prototype, "directives", {
                    get: function () { return exceptions_1.unimplemented(); },
                    enumerable: true,
                    configurable: true
                });
                return IBeginElementCmd;
            })(api_1.RenderBeginElementCmd);
            exports_1("IBeginElementCmd", IBeginElementCmd);
            BeginElementCmd = (function () {
                function BeginElementCmd(name, attrNameAndValues, eventTargetAndNames, variableNameAndValues, directives, isBound, ngContentIndex) {
                    this.name = name;
                    this.attrNameAndValues = attrNameAndValues;
                    this.eventTargetAndNames = eventTargetAndNames;
                    this.variableNameAndValues = variableNameAndValues;
                    this.directives = directives;
                    this.isBound = isBound;
                    this.ngContentIndex = ngContentIndex;
                }
                BeginElementCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitBeginElement(this, context);
                };
                BeginElementCmd = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [String, Array, Array, Array, Array, Boolean, Number])
                ], BeginElementCmd);
                return BeginElementCmd;
            })();
            exports_1("BeginElementCmd", BeginElementCmd);
            EndElementCmd = (function () {
                function EndElementCmd() {
                }
                EndElementCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitEndElement(context);
                };
                EndElementCmd = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], EndElementCmd);
                return EndElementCmd;
            })();
            exports_1("EndElementCmd", EndElementCmd);
            BeginComponentCmd = (function () {
                function BeginComponentCmd(name, attrNameAndValues, eventTargetAndNames, variableNameAndValues, directives, encapsulation, ngContentIndex, 
                    // Note: the template needs to be stored as a function
                    // so that we can resolve cycles
                    templateGetter /*() => CompiledComponentTemplate*/) {
                    this.name = name;
                    this.attrNameAndValues = attrNameAndValues;
                    this.eventTargetAndNames = eventTargetAndNames;
                    this.variableNameAndValues = variableNameAndValues;
                    this.directives = directives;
                    this.encapsulation = encapsulation;
                    this.ngContentIndex = ngContentIndex;
                    this.templateGetter = templateGetter;
                    this.isBound = true;
                }
                Object.defineProperty(BeginComponentCmd.prototype, "templateId", {
                    get: function () { return this.templateGetter().id; },
                    enumerable: true,
                    configurable: true
                });
                BeginComponentCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitBeginComponent(this, context);
                };
                BeginComponentCmd = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [String, Array, Array, Array, Array, Number, Number, Function])
                ], BeginComponentCmd);
                return BeginComponentCmd;
            })();
            exports_1("BeginComponentCmd", BeginComponentCmd);
            EndComponentCmd = (function () {
                function EndComponentCmd() {
                }
                EndComponentCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitEndComponent(context);
                };
                EndComponentCmd = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], EndComponentCmd);
                return EndComponentCmd;
            })();
            exports_1("EndComponentCmd", EndComponentCmd);
            EmbeddedTemplateCmd = (function () {
                function EmbeddedTemplateCmd(attrNameAndValues, variableNameAndValues, directives, isMerged, ngContentIndex, changeDetectorFactory, children) {
                    this.attrNameAndValues = attrNameAndValues;
                    this.variableNameAndValues = variableNameAndValues;
                    this.directives = directives;
                    this.isMerged = isMerged;
                    this.ngContentIndex = ngContentIndex;
                    this.changeDetectorFactory = changeDetectorFactory;
                    this.children = children;
                    this.isBound = true;
                    this.name = null;
                    this.eventTargetAndNames = EMPTY_ARR;
                }
                EmbeddedTemplateCmd.prototype.visit = function (visitor, context) {
                    return visitor.visitEmbeddedTemplate(this, context);
                };
                EmbeddedTemplateCmd = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [Array, Array, Array, Boolean, Number, Function, Array])
                ], EmbeddedTemplateCmd);
                return EmbeddedTemplateCmd;
            })();
            exports_1("EmbeddedTemplateCmd", EmbeddedTemplateCmd);
        }
    }
});
//# sourceMappingURL=template_commands.js.map