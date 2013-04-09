/**
 * Created with JetBrains PhpStorm.
 * Author: khuongdt
 * Date: 10/04/2013
 * Time: 04:19
 * Project: limejs
 * Filename:
 *
 */

goog.provide('hanvien.e5cards.entity.Card');

//requirements
goog.require('lime.Sprite');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');
goog.require('lime.RoundedRect');

goog.require('hanvien.e5cards.Helper');

/**
 * Card sprite
 * @constructor
 * @extends {lime.Sprite}
 */
hanvien.e5cards.entity.Card = function () {
    goog.base(this);

    /**
     * Width of this card
     * @type {number}
     * @private
     */
    this._width = e5_card_height;

    /**
     * Height of this card
     * @type {number}
     * @private
     */
    this._height = e5_card_height;

    /**
     * Rounded radius for of this card
     * @type {number}
     * @private
     */
    this._radius = e5_card_radius;


    /**
     * Source file
     * @type {string}
     * @private
     */
    this._src = '../assets/qs.png';
//
//    this._rect =new lime.RoundedRect().setRadius(this._radius).setSize(e5_card_width, e5_card_height);
//    this._rect.setFill(this._src);

    this.setFill(this._src);

    /**
     * Card is selected.
     * @desc true if is selected otherwise false
     * @type {boolean}
     * @private
     */
    this._selected = false;

    //co the ko can su dung den 3 bien sau
    /**
     * Current position X
     * @type {number}
     * @private
     */
    this._posX = 0;

    /**
     * Current position Y
     * @type {number}
     * @private
     */
    this._posY = 0;

    /**
     * Current angle in degree
     * @type {number}
     * @private
     */
    this._currentAngle = 0;

    //get current position
    this._lastPosition = this.getPosition();

    //Adds event listener | interaction with this object
    goog.events.listen(this, ['mousedown', 'touchstart'], this.onMouseDown);
//    goog.events.listen(this,['mouseup', 'touchend'], this.onMouseUp);

}

goog.inherits(hanvien.e5cards.entity.Card, lime.Sprite);

//mixed card for inherit from lime.RoundedRect
//goog.mixin(hanvien.e5cards.entity.Card.prototype,lime.RoundedRect.prototype);


/**
 * Checks object is selected or not
 * @returns {boolean}
 */
hanvien.e5cards.entity.Card.prototype.isSelected = function () {
    return this._selected;
}

hanvien.e5cards.entity.Card.prototype.onMouseDown = function (e) {
    console.log('down');
//    if(this._selected) return;
    this._lastPosition = this.getPosition();

    //animate this object
    var actions = new lime.animation.Spawn(
        new lime.animation.FadeTo(.9).setDuration(.2),
        new lime.animation.ScaleTo(.5).setDuration(.5)
    );

    if (e.target) e.target.runAction(actions);

    //let target follow the mouse/finger
    e.startDrag();

    //listen for end event
    e.swallow(['mouseup', 'touchend'], this.onMouseUp);

    this._selected = true;

}

hanvien.e5cards.entity.Card.prototype.onMouseUp = function (e) {

//    if(!this._selected) return;

    console.log('up..');
    var cx = this._lastPosition.x;
    var cy = this._lastPosition.y;
    //animate
    var actions = new lime.animation.Spawn(
        new lime.animation.FadeTo(1),
        new lime.animation.ScaleTo(.6),
        new lime.animation.MoveTo(cx, cy)
    );
    console.log(e.target);
    this.runAction(actions);

    this._lastPosition = this.getPosition();
    console.log(this._lastPosition);


//    this._selected = true;

}