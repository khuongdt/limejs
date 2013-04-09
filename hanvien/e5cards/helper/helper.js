/**
 * Created with JetBrains PhpStorm.
 * Author: khuongdt
 * Date: 10/04/2013
 * Time: 03:40
 * Project: limejs
 * Filename:
 *
 */
goog.provide('hanvien.e5cards.Helper');

goog.require('lime.Scene');
goog.require('lime.Sprite');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');

/**
 * Hosted domain name
 * @const
 */
hv_DomainName = 'hanvien.com';

/**
 * Default port
 */
hv_Port = 80;

/**
 * Default viewport width in pixel.
 * @const
 */
hv_Witdh = 1024;

/**
 * Default viewport height in pixel.
 * @const
 */
hv_Height = 768;

/**
 * Default card width in pixel.
 * @const
 */
e5_card_width = 400;

/**
 * Default card height in pixel.
 * @const
 */
e5_card_height = 558;

/**
 * Default card rounded corner radius in pixel.
 * @const
 */
e5_card_radius = 10;

/**
 * Helper scene
 * @constructor
 * @extends {lime.Scene}
 */
hanvien.e5cards.Helper = function () {
    goog.base(this);


}

goog.inherits(hanvien.e5cards.Helper, lime.Scene);

//uses singleton pattern for helper
goog.addSingletonGetter(hanvien.e5cards.Helper);
