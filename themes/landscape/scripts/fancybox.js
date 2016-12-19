var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;

var rNum = /^\d+$/;

/**
* Fancybox tag. Thumbnail width defaults to 200.
*
* Syntax:
*   {% fancybox /path/to/image [/path/to/image] [width] [title] %}
*/

hexo.extend.tag.register('fancybox', function(args){
  var original = args.shift(),
    thumbnail = null,
	width = 200;

  if (args.length && rUrl.test(args[0])){
    thumbnail = args.shift();
  }

  if (args.length && rNum.test(args[0])){
    width = parseInt(args.shift(), 10);
  }

  var title = args.join(' ');

  return '<a class="fancybox" href="' + original + '" title="' + title + '">' +
    '<img src="' + (thumbnail || original) + '" alt="' + title + '" width=' + width + ' />'
    '</a>' +
    (title ? '<span class="caption">' + title + '</span>' : '');
});