const HTML_CONTENT_BODY = /*'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" display="none" width="0" height="0"><symbol id="icon-a24" viewBox="0 0 40 40"><path d="M3.3,16.9c0.1,0.1,0.3,0.2,0.5,0.2h4.4c0.3,0,0.6-0.2,0.7-0.5c0.6-1.5,1-2.4,1.2-2.7c1.1-1.7,2.5-3.1,4.2-4.1S18,8.3,20,8.3 c1.5,0,2.9,0.3,4.3,0.8s2.6,1.3,3.7,2.3l-3.1,3.1c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.3,0.3,0.6,0.4,1,0.4H36 c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1V5.4c0-0.4-0.1-0.7-0.4-1C36.8,4.1,36.4,4,36,4c-0.4,0-0.7,0.1-1,0.4l-2.9,2.9 c-1.6-1.5-3.5-2.7-5.5-3.6s-4.2-1.3-6.4-1.3c-4.2,0-7.8,1.3-10.9,3.8s-5.1,5.8-6.1,9.9c0,0,0,0.1,0,0.2C3.1,16.6,3.1,16.7,3.3,16.9z M2.9,35.6C3.2,35.9,3.6,36,4,36s0.7-0.1,1-0.4l3-2.9c1.6,1.5,3.5,2.7,5.6,3.6s4.3,1.3,6.5,1.3c4.2,0,7.8-1.3,10.9-3.8 s5.2-5.8,6.2-9.9v-0.2c0-0.2-0.1-0.4-0.2-0.5s-0.3-0.2-0.5-0.2h-4.5c-0.3,0-0.6,0.2-0.7,0.5c-0.6,1.5-1,2.4-1.2,2.7 c-1.1,1.7-2.5,3.1-4.2,4.1c-1.8,1-3.7,1.5-5.7,1.5c-3.1,0-5.7-1-8-3.1l3.1-3.1c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1 c-0.3-0.3-0.6-0.4-1-0.4H4c-0.4,0-0.7,0.1-1,0.4s-0.4,0.6-0.4,1v10.2C2.5,35,2.6,35.3,2.9,35.6z"/></symbol><symbol id="icon-960" viewBox="0 0 40 40"><path d="M34.2,18.7v2.5c0,0.7-0.2,1.3-0.6,1.8c-0.4,0.5-1,0.7-1.7,0.7H18.1l5.8,5.8c0.5,0.5,0.7,1.1,0.7,1.8c0,0.7-0.2,1.3-0.7,1.8 l-1.5,1.5c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7L6.1,21.8c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8L18.8,5.4 c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.2,1.8,0.7l1.5,1.5c0.5,0.5,0.7,1.1,0.7,1.8s-0.2,1.3-0.7,1.8l-5.8,5.8h13.8 c0.7,0,1.2,0.2,1.7,0.7C34,17.5,34.2,18,34.2,18.7z"/></symbol><symbol id="icon-961" viewBox="0 0 40 40"><path d="M34.6,20c0,0.7-0.2,1.3-0.7,1.8L21.1,34.6c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7l-1.5-1.5 c-0.5-0.5-0.7-1.1-0.7-1.8s0.2-1.3,0.7-1.8l5.8-5.8H8c-0.7,0-1.2-0.2-1.7-0.7c-0.4-0.5-0.6-1.1-0.6-1.8v-2.5c0-0.7,0.2-1.3,0.6-1.8 c0.4-0.5,1-0.7,1.7-0.7h13.8l-5.8-5.8c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8l1.5-1.5c0.5-0.5,1.1-0.7,1.8-0.7 c0.7,0,1.3,0.2,1.8,0.7l12.8,12.8C34.4,18.7,34.6,19.3,34.6,20z"/></symbol><symbol id="icon-a52" viewBox="0 0 40 40"><path d="M39.9,18.7v2.5c0,0.7-0.2,1.3-0.6,1.8c-0.4,0.5-1,0.7-1.7,0.7H23.8l5.8,5.8c0.5,0.5,0.7,1.1,0.7,1.8c0,0.7-0.2,1.3-0.7,1.8 l-1.5,1.5c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7L11.8,21.8c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8L24.5,5.4 c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.2,1.8,0.7l1.5,1.5c0.5,0.5,0.7,1.1,0.7,1.8s-0.2,1.3-0.7,1.8l-5.8,5.8h13.8 c0.7,0,1.2,0.2,1.7,0.7C39.7,17.5,39.9,18,39.9,18.7z M3.6,35.3h3.9c0.8,0,1.5-0.7,1.5-1.5V6.2c0-0.8-0.7-1.5-1.5-1.5H3.6 c-0.8,0-1.5,0.7-1.5,1.5v27.6C2.1,34.6,2.8,35.3,3.6,35.3z"/></symbol><symbol id="icon-a56" viewBox="0 0 40 40"><path d="M0.7,17c0.5-0.5,1-0.7,1.7-0.7h13.8l-5.8-5.8C9.9,10,9.7,9.4,9.7,8.7s0.2-1.3,0.7-1.8l1.5-1.5c0.5-0.5,1.1-0.7,1.8-0.7 c0.7,0,1.3,0.2,1.8,0.7l12.7,12.8c0.5,0.5,0.7,1.1,0.7,1.8c0,0.7-0.2,1.3-0.7,1.8L15.5,34.6c-0.5,0.5-1.1,0.7-1.8,0.7 c-0.7,0-1.3-0.2-1.8-0.7l-1.5-1.5c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8l5.8-5.8H2.4c-0.7,0-1.3-0.2-1.7-0.7 c-0.4-0.5-0.6-1.1-0.6-1.8v-2.5C0.1,18,0.3,17.5,0.7,17z M36.4,4.7h-3.9c-0.8,0-1.5,0.7-1.5,1.5v27.6c0,0.8,0.7,1.5,1.5,1.5h3.9 c0.8,0,1.5-0.7,1.5-1.5V6.2C37.9,5.4,37.2,4.7,36.4,4.7z"/></symbol><symbol id="icon-906" viewBox="0 0 40 40"><path d="M27.2,4.7v4.9h-2.9c-1.1,0-1.8,0.2-2.1,0.6c-0.4,0.5-0.6,1.1-0.6,2v3.5H27l-0.7,5.4h-4.7v14H16v-14h-4.7v-5.4H16v-4.1 c0-2.3,0.6-4.1,1.9-5.3s2.9-1.9,5.2-1.9C24.8,4.4,26.2,4.5,27.2,4.7L27.2,4.7z"/></symbol><symbol id="icon-910" viewBox="0 0 40 40"><path d="M20,7c4.2,0,4.7,0,6.3,0.1c1.5,0.1,2.3,0.3,3,0.5C30,8,30.5,8.3,31.1,8.9c0.5,0.5,0.9,1.1,1.2,1.8c0.2,0.5,0.5,1.4,0.5,3 C33,15.3,33,15.8,33,20s0,4.7-0.1,6.3c-0.1,1.5-0.3,2.3-0.5,3c-0.3,0.7-0.6,1.2-1.2,1.8c-0.5,0.5-1.1,0.9-1.8,1.2 c-0.5,0.2-1.4,0.5-3,0.5C24.7,33,24.2,33,20,33s-4.7,0-6.3-0.1c-1.5-0.1-2.3-0.3-3-0.5C10,32,9.5,31.7,8.9,31.1 C8.4,30.6,8,30,7.7,29.3c-0.2-0.5-0.5-1.4-0.5-3C7,24.7,7,24.2,7,20s0-4.7,0.1-6.3c0.1-1.5,0.3-2.3,0.5-3C8,10,8.3,9.5,8.9,8.9 C9.4,8.4,10,8,10.7,7.7c0.5-0.2,1.4-0.5,3-0.5C15.3,7.1,15.8,7,20,7z M20,4.3c-4.3,0-4.8,0-6.5,0.1c-1.6,0-2.8,0.3-3.8,0.7 C8.7,5.5,7.8,6,6.9,6.9C6,7.8,5.5,8.7,5.1,9.7c-0.4,1-0.6,2.1-0.7,3.8c-0.1,1.7-0.1,2.2-0.1,6.5s0,4.8,0.1,6.5 c0,1.6,0.3,2.8,0.7,3.8c0.4,1,0.9,1.9,1.8,2.8c0.9,0.9,1.7,1.4,2.8,1.8c1,0.4,2.1,0.6,3.8,0.7c1.6,0.1,2.2,0.1,6.5,0.1 s4.8,0,6.5-0.1c1.6-0.1,2.9-0.3,3.8-0.7c1-0.4,1.9-0.9,2.8-1.8c0.9-0.9,1.4-1.7,1.8-2.8c0.4-1,0.6-2.1,0.7-3.8 c0.1-1.6,0.1-2.2,0.1-6.5s0-4.8-0.1-6.5c-0.1-1.6-0.3-2.9-0.7-3.8c-0.4-1-0.9-1.9-1.8-2.8c-0.9-0.9-1.7-1.4-2.8-1.8 c-1-0.4-2.1-0.6-3.8-0.7C24.8,4.3,24.3,4.3,20,4.3L20,4.3L20,4.3z"/><path d="M20,11.9c-4.5,0-8.1,3.7-8.1,8.1s3.7,8.1,8.1,8.1s8.1-3.7,8.1-8.1S24.5,11.9,20,11.9z M20,25.2c-2.9,0-5.2-2.3-5.2-5.2 s2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2S22.9,25.2,20,25.2z"/><path d="M30.6,11.6c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9s0.8-1.9,1.9-1.9C29.8,9.7,30.6,10.5,30.6,11.6z"/></symbol><symbol id="icon-905" viewBox="0 0 40 40"><path d="M36.3,10.2c-1,1.3-2.1,2.5-3.4,3.5c0,0.2,0,0.4,0,1c0,1.7-0.2,3.6-0.9,5.3c-0.6,1.7-1.2,3.5-2.4,5.1 c-1.1,1.5-2.3,3.1-3.7,4.3c-1.4,1.2-3.3,2.3-5.3,3c-2.1,0.8-4.2,1.2-6.6,1.2c-3.6,0-7-1-10.2-3c0.4,0,1.1,0.1,1.5,0.1 c3.1,0,5.9-1,8.2-2.9c-1.4,0-2.7-0.4-3.8-1.3c-1.2-1-1.9-2-2.2-3.3c0.4,0.1,1,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-1.4-0.3-2.7-1.1-3.7-2.3s-1.4-2.6-1.4-4.2v-0.1c1,0.6,2,0.9,3,0.9c-1-0.6-1.5-1.3-2.2-2.4c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3,1-3.4 c1.5,2.1,3.6,3.6,6,4.9s4.9,2,7.6,2.1c-0.1-0.6-0.1-1.1-0.1-1.4c0-1.8,0.8-3.5,2-4.7c1.2-1.2,2.9-2,4.7-2c2,0,3.6,0.8,4.8,2.1 c1.4-0.3,2.9-0.9,4.2-1.5c-0.4,1.5-1.4,2.7-2.9,3.6C33.8,11.2,35.1,10.9,36.3,10.2L36.3,10.2z"/></symbol></svg>' + */
'<div id="wrapper"><div id="main"><div class="inner">' +
'<header id="header">' +
'<ul id="buttons01" class="buttons">' +
'<li><a href="' + URL_HOME + '" class="button n01">Home</a></li>' +
'<li><a href="' + URL_ARCHIVE + '" class="button n02">Archive</a></li>' +
'<li><a href="' + URL_CONTACT + '" class="button n03">Contact</a></li>' +
'</ul>' +
'<div id="container04" class="container default"><div class="wrapper"><div class="inner"></div></div></div>' +
'</header>' +
'<section id="home-section">' +
'<h1 id="text03">Solver Lining</h1>' +
'<p id="text04">Every glitch comes with one.</p>' +
'<hr id="divider01">' +
'<div id="container01" class="container default">' +
'<div class="wrapper">' +
'<div class="inner">' +
'<div id="comic_image" class="image full">' +
'<img id="comic_frame" src="assets/images/1.png" alt="" />' +
'</div>' +
'</div>' +
'</div>' +
'</div>' +
'<ul id="icons01" class="icons">' +
'<li><a class="n01" href="javascript: goToFirstComic()"><span class="label">First Arrow</span></a></li>' +
'<li><a class="n02" href="javascript: goToPreviousComic()"><span class="label">Left Arrow</span></a></li>' +
'<li><a class="n03" href="javascript: goToRandomComic()"><span class="label">Refresh</span></a></li>' +
'<li><a class="n04" href="javascript: goToNextComic()"><span class="label">Right Arrow</span></a></li>' +
'<li><a class="n05" href="javascript: goToLastComic()"><span class="label">Last Arrow</span></a></li>' +
//'<li><a class="n01" href="javascript: goToFirstComic()"><svg><use xlink:href="#icon-a52"></use></svg><span class="label">First Arrow</span></a></li>' +
//'<li><a class="n02" href="javascript: goToPreviousComic()"><svg><use xlink:href="#icon-960"></use></svg><span class="label">Left Arrow</span></a></li>' +
//'<li><a class="n03" href="javascript: goToRandomComic()"><svg><use xlink:href="#icon-a24"></use></svg><span class="label">Refresh</span></a></li>' +
//'<li><a class="n04" href="javascript: goToNextComic()"><svg><use xlink:href="#icon-961"></use></svg><span class="label">Right Arrow</span></a></li>' +
//'<li><a class="n05" href="javascript: goToLastComic()"><svg><use xlink:href="#icon-a56"></use></svg><span class="label">Last Arrow</span></a></li>' +
'</ul>' +
'</section>' +
'<section id="archive-section">' +
'<p id="text01">ARCHIVE</p>' +
'<ul id="links01" class="links">' +
//'<li><a class="n01" href="#home">[2021.06.22] Birthday Wish</a></li>' +
//'<li><a class="n02" href="#home">[2021.06.14] Same Difference</a></li>' +
'</ul>' +
'</section>' +
'<section id="contact-section"><p id="text02">Contact</p><form id="form01" method="post"><div class="inner"><div class="field"><input type="text" name="name" id="form01-name" placeholder="Name" maxlength="128" required /></div><div class="field"><input type="email" name="email" id="form01-email" placeholder="Email" maxlength="128" required /></div><div class="field"><input type="text" name="subject" id="form01-subject" placeholder="Subject" maxlength="128" required /></div><div class="field"><input type="text" name="your-url" id="form01-your-url" placeholder="Your Url" maxlength="128" /></div><div class="field"><textarea data-gramm_editor="false" name="message" id="form01-message" placeholder="Message" maxlength="16384" required></textarea></div><div class="actions"><button type="submit">Submit</button></div></div><input type="hidden" name="id" value="form01" /></form></section><footer id="footer"><div id="container02" class="container default"><div class="wrapper"><div class="inner"></div></div></div><hr id="divider02"><div id="container03" class="container default"><div class="wrapper"><div class="inner"><ul id="icons02" class="icons"><li><a class="n01" href="https://twitter.com/solverlining"><svg><use xlink:href="#icon-905"></use></svg><span class="label">Twitter</span></a></li><li><a class="n02" href="https://facebook.com/solverlining"><svg><use xlink:href="#icon-906"></use></svg><span class="label">Facebook</span></a></li><li><a class="n03" href="https://instagram.com/solverlining"><svg><use xlink:href="#icon-910"></use></svg><span class="label">Instagram</span></a></li></ul></div></div></div></footer></div></div></div>';
