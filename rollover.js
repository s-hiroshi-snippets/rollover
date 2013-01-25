/**
 * rolloverChildren
 *
 * 子孫要素へロールオーバー機能を提供する
 *
 * {@code
 * <ul>
 *   <li><img src=""></li>
 * </ul>
 * }
 * {@code
 * $('ul').rolloverChildren();
 * }
 *
 * @param {Object} options key/value pair
 * <li>selector ロールオーバーするセレクター
 * <li>suffix ロールオーバー画像の接尾辞
 * <li>画像の拡張子
 */
jQuery.fn.rollover = function(options) {
    options =  options || {
        selector: 'img',
        suffix: '_over',
        extension: 'png'

    };
    $(options.selector, this).each(function() {
        var dir;
        var path;
        $(this).hover(function() {
            dir = $(this).attr('src').split('.' + options.extension)[0];
            path = dir + options.suffix + '.' + options.extension;
            $(this).attr('src', path);
        }, function() {
            dir = $(this).attr('src').split(options.suffix)[0];
            path = dir + '.' + options.extension;
            $(this).attr('src', path);
        });
    });
};