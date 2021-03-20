
// 加 md5
fis.match('*.{css,png}', {
  useHash: false
});

fis.match("/en/js/common/*.js", {
	useHash:false
});

fis.match("/en/js/lib/**.js", {
	useHash:false
});

fis.match("/en/js/modules/**.js", {
	useHash:false
});



//对 CSS 进行图片合并
fis.match('*.css', {
// 给匹配到的文件分配属性 `useSprite`
useSprite: true
});


//对 html 进行图片合并
fis.match('*.html', {
// 给匹配到的文件分配属性 `useSprite`
useSprite: true
});

fis.match('*.css', {
// fis-optimizer-clean-css 插件进行压缩，已内置
optimizer: fis.plugin('clean-css')
});


