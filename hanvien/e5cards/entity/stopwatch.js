/**
 * Created with JetBrains PhpStorm.
 * Author: khuongdt
 * Date: 10/04/2013
 * Time: 11:39
 * Project: limejs
 * Filename:
 *
 */

goog.provide('hanvien.e5cards.entity.StopWatch');

goog.require('lime.Circle');

goog.require('lime.animation.Spawn');
goog.require('lime.animation.Sequence');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.RotateTo');
goog.require('lime.animation.RotateBy');
goog.require('lime.animation.ScaleTo');

goog.require('goog.dom');

/**
 * Stopwatch sprite
 * @constructor
 * @extends {lime.Sprite}
 */
hanvien.e5cards.entity.StopWatch = function () {
    goog.base(this);

    this._radius = 90;

    this._lineWidth = 20;


    /**
     * Time to countdown from
     * @type {number}
     * @private
     */
    this._maxTime = 10; //seconds

    /**
     * Current time, in second
     * @type {number}
     * @private
     */
    this._duration = this._maxTime; // seconds

    this.cvs = goog.dom.createElement('canvas');

    this.cvs.width = 200;
    this.cvs.height = 200;

    this.ctx = this.cvs.getContext('2d');
//    this.gr = this.ctx.createRadialGradient(50, 50, this._radius / 2, 100, 100, this._radius * 2);
//
//    // Add the color stops.
//    this.gr.addColorStop(0, 'rgb(255,0,0)');
//    this.gr.addColorStop(.25, 'yellow');
//    this.gr.addColorStop(.5, 'rgb(0,255,0)');
//    this.gr.addColorStop(1, 'rgb(0,0,255)');
//
//    this.ctx.strokeStyle = this.gr;
//    this.ctx.lineWidth = this._lineWidth;

    this.appendChild(this.cvs);

}

goog.inherits(hanvien.e5cards.entity.StopWatch, lime.Sprite);

/**
 *
 * @param {number} seconds
 */
hanvien.e5cards.entity.StopWatch.prototype.setDuration = function (/** @type {number} */ seconds) {
    this._duration = seconds;
}

/**
 * Gets current duration
 * @returns {number}
 */
hanvien.e5cards.entity.StopWatch.prototype.getDuration = function () {
    return this._duration;
}


/**
 * Starts counter
 */
hanvien.e5cards.entity.StopWatch.prototype.start = function () {
    //animate object
    var task = new lime.scheduleManager.Task(1 / 33);
    lime.scheduleManager.schedule(this.draw, this, task);

//    lime.scheduleManager.scheduleWithDelay(this.stop,this,this._maxTime,1);

}

/**
 * Stops animate and counter
 * @param {boolean} bHide
 */
hanvien.e5cards.entity.StopWatch.prototype.stop = function (/** @type {boolean} */ bHide) {
    lime.scheduleManager.unschedule(this.draw, this);
}

/**
 * Draw arc
 * @param {hanvien.e5cards.entity.StopWatch} sw
 */
hanvien.e5cards.entity.StopWatch.prototype.draw = function (/** @type {hanvien.e5cards.entity.StopWatch} */ sw) {

    var percentage = this._duration / this._maxTime;

    var context = this.cvs.getContext('2d');
    context.clearRect(0, 0, 200, 200);

    var gr = context.createRadialGradient(50, 50, this._radius / 2, 100, 100, this._radius * 2);
    gr.addColorStop(0, 'rgb(255,0,0)');
    gr.addColorStop(.25, 'rgb(125,125,0)');
    gr.addColorStop(.5, 'rgb(0,255,0)');
    gr.addColorStop(1, 'rgb(0,0,255)');
    context.strokeStyle = gr;
//    context.fillStyle = gr;
//    context.fillRect(0,0,200,200);

//    context.fillStyle =gr;

    context.clearRect(0, 0, 200, 200);

    if (this._duration < -1 / 33) this._duration = this._maxTime;

    context.beginPath();

    context.lineWidth = this._lineWidth;
    context.arc(100, 100, this._radius, (Math.PI / 180) * -90, -(Math.PI / 180) * (360 * percentage + 90), true);


//    context.closePath();
//    ctx.arc(100, 100, 75, (Math.PI / 180) * 90, (Math.PI / 180) * 180, false)
    context.stroke();
    context.lineWidth = 1;
    context.strokeText(this._duration, 50, 100);
    context.stroke();
//    context.fill();

    this._duration -= 1 / 33;
}