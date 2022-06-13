import { r as registerInstance, h, g as getElement } from './core-36452501.js';
import './_commonjsHelpers-ae1b5db5.js';
import './index-5afdd7fa.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
var ScrollZRoot = /** @class */ (function () {
    function ScrollZRoot(hostRef) {
        registerInstance(this, hostRef);
        this.initialOriginX = 50;
        this.initialOriginY = 30;
        this.itemZ = 10;
        this.cameraSpeed = 150;
        this.cameraZ = -1;
        this.scenePerspective = 1;
        this.distanceFromTop = 0;
        this.distanceFromBottom = 0;
        this.perspectiveOrigin = { x: 0, y: 0, maxGap: 10 };
    }
    ScrollZRoot.prototype.randomFloat = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    ScrollZRoot.prototype.componentWillLoad = function () {
        this.distanceFromTop = this.element.getBoundingClientRect().top;
        this.distanceFromBottom = this.element.getBoundingClientRect().bottom;
        this.prepare();
    };
    ScrollZRoot.prototype.prepare = function () {
        var _this = this;
        this.sections = Array.from(this.element.querySelectorAll('stellar-scroll-z-section'));
        properties.set({
            '--scenePerspective': this.scenePerspective,
            '--scenePerspectiveOriginX': this.initialOriginX,
            '--scenePerspectiveOriginY': this.initialOriginY,
            '--itemZ': this.itemZ,
            '--cameraSpeed': this.cameraSpeed,
            '--cameraZ': this.cameraZ,
            '--sectionHeight': 0
        }, document.documentElement);
        this.perspectiveOrigin = {
            x: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginX")),
            y: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginY")),
            maxGap: 10
        };
        this.setSceneHeight();
        this.sections.forEach(function (section, index) {
            var x = _this.randomFloat(-20, 120) + "%";
            var y = _this.randomFloat(-20, 120) + "%";
            var z = "calc(var(--itemZ) * var(--cameraSpeed) * " + index + " * -1px)";
            section.style.setProperty('transform', "translate3D(" + x + ", " + y + ", " + z + ")");
        });
    };
    ScrollZRoot.prototype.setSceneHeight = function () {
        var numberOfItems = this.sections.length;
        var itemZ = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemZ"));
        var scenePerspective = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective"));
        var cameraSpeed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed"));
        var height = window.innerHeight +
            scenePerspective * cameraSpeed +
            (itemZ / 2) * cameraSpeed * numberOfItems;
        document.documentElement.style.setProperty("--sectionHeight", "" + height);
    };
    ScrollZRoot.prototype.moveCamera = function () {
        this.distanceFromTop = this.element.getBoundingClientRect().top;
        this.distanceFromBottom = this.element.getBoundingClientRect().bottom;
        var offset = window.pageYOffset - this.distanceFromTop;
        if (offset >= 0) {
            document.documentElement.style.setProperty("--cameraZ", "" + offset);
        }
        else {
            document.documentElement.style.setProperty("--cameraZ", "-1");
        }
    };
    ScrollZRoot.prototype.moveCameraAngle = function (event) {
        var xGap = (((event.clientX - window.innerWidth / 2) * 100) / (window.innerWidth / 2)) * -1;
        var yGap = (((event.clientY - window.innerHeight / 2) * 100) / (window.innerHeight / 2)) * -1;
        var newPerspectiveOriginX = this.perspectiveOrigin.x + (xGap * this.perspectiveOrigin.maxGap) / 100;
        var newPerspectiveOriginY = this.perspectiveOrigin.y + (yGap * this.perspectiveOrigin.maxGap) / 100;
        document.documentElement.style.setProperty("--scenePerspectiveOriginX", "" + newPerspectiveOriginX);
        document.documentElement.style.setProperty("--scenePerspectiveOriginY", "" + newPerspectiveOriginY);
    };
    ScrollZRoot.prototype.render = function () {
        return h("div", { class: "container" }, h("div", { class: "scene" }, h("slot", null)));
    };
    Object.defineProperty(ScrollZRoot.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollZRoot, "style", {
        get: function () { return ":host{height:calc(var(--sectionHeight) * 1px);display:block;opacity:calc(var(--cameraZ) + 1);will-change:opacity;-webkit-transition:opacity .2s ease 0s;transition:opacity .2s ease 0s}:host .container{position:fixed;top:0;left:0;width:100%;height:100%;-webkit-perspective:calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);perspective:calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);-webkit-perspective-origin:calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);perspective-origin:calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);will-change:perspective-origin;-webkit-transform:translateZ(0);transform:translateZ(0)}:host .scene{position:absolute;top:0;height:100vh;width:100%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(calc(var(--cameraZ) * 1px));transform:translateZ(calc(var(--cameraZ) * 1px));will-change:transform}:host ::slotted(stellar-scroll-z-section){position:absolute;display:block;width:100%;top:40%}\@media only screen and (min-width:600px){:host ::slotted(stellar-scroll-z-section){width:45%}}"; },
        enumerable: true,
        configurable: true
    });
    return ScrollZRoot;
}());
export { ScrollZRoot as stellar_scroll_z_root };
