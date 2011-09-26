## Changes to tt_content

# add another sitemap item: show pages on same level
plugin.t3temple_skin_basic.pagesOnSameLevel = HMENU
plugin.t3temple_skin_basic.pagesOnSameLevel {
	special = directory
	special.value.data = leveluid : -2
	wrap = <ul class="csc-menu csc-menu-8">|</ul>
	1 = TMENU
	1 {
		target = {$PAGE_TARGET}
		noBlur = 1
		NO = 1
		NO {
			stdWrap.htmlSpecialChars = 1
			wrapItemAndSub = <li>|</li>
			ATagTitle.field = description // title
		}
		ACT < .NO
		ACT.wrapItemAndSub = <li class="active">|</li>
	}
}


tt_content.menu.20.8 =< plugin.t3temple_skin_basic.pagesOnSameLevel



## Slider
tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
  key.field = section_frame
  30 = TEXT
  30.value = <div class="t3t-slider">|</div>
}
 
