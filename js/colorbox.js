!function(o){Drupal.behaviors.initColorbox={attach:function(t,r){if(o.isFunction(o("a, area, input",t).colorbox)&&void 0!==r.colorbox){if(r.colorbox.mobiledetect&&window.matchMedia)if(window.matchMedia("(max-device-width: "+r.colorbox.mobiledevicewidth+")").matches)return;r.colorbox.rel=function(){return o(this).data("colorbox-gallery")?o(this).data("colorbox-gallery"):o(this).attr("rel")},o(".colorbox",t).once("init-colorbox").each((function(){var t={photo:!0},i=o(this).attr("title");i&&(t.title=Drupal.colorbox.sanitizeMarkup(i)),o(this).colorbox(o.extend({},r.colorbox,t))})),o(t).bind("cbox_complete",(function(){Drupal.attachBehaviors("#cboxLoadedContent")}))}}},Drupal.hasOwnProperty("colorbox")||(Drupal.colorbox={}),Drupal.colorbox.sanitizeMarkup=function(o){if("undefined"!=typeof DOMPurify){var t={ALLOWED_TAGS:["a","b","strong","i","em","u","cite","code","br"],ALLOWED_ATTR:["href","hreflang","title","target"]};return Drupal.settings.hasOwnProperty("dompurify_custom_config")&&(t=Drupal.settings.dompurify_custom_config),DOMPurify.sanitize(o,t)}return Drupal.checkPlain(o)}}(jQuery);