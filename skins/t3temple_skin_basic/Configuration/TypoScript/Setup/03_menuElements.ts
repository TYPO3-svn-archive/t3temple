## Menu Elements
## 1. Main Menu
## 2. Meta Navigation
## 3. Breadcrumb
## 4. Footer Menu

## Main Menu
plugin.t3temple_skin_basic.mainMenu = HMENU
plugin.t3temple_skin_basic.mainMenu {
	1 = TMENU
	1 {
		expAll= 1
		noBlur = 1
		wrap = <ul id="nav"> | </ul>
		NO = 1
		NO {
			wrapItemAndSub = <li> | </li>
		}
		
		ACT = 1
		ACT < .NO
		ACT.wrapItemAndSub = <li class="active"> | </li>
	}
	2 < .1
	2 {
		wrap = <ul> | </ul>
		NO.wrapItemAndSub = <li> | </li>
		ACT < .NO
		ACT.wrapItemAndSub = <li class="active"> | </li>
	}
	3 < .2
	4 < .2
}




## Meta Navigation, also contains the Language Navigation
plugin.t3temple_skin_basic.metaNavigation = COA
plugin.t3temple_skin_basic.metaNavigation {
	# show the objects 10 and 40 (<ul id="meta"> and </ul>) only, if either metaNavPID or lang1.uid is > 0
	10 = TEXT
	10.value = <ul id="meta">
	10.if {
		value = 1
		isLessThan = {$plugin.t3temple_skin_basic.metaNavPID}
		isFalse = {$plugin.t3temple.lang1.uid}
		negate = 1
	}

	20 = HMENU
	20 {
		# show the metaNav only if a PID for the metaNav is given
		if.isTrue = {$plugin.t3temple_skin_basic.metaNavPID}
		special = directory
		special.value = {$plugin.t3temple_skin_basic.metaNavPID}
		1 = TMENU
		1 {
			expAll= 1
			noBlur = 1
			NO = 1
			NO {
				wrapItemAndSub = <li> | &nbsp;</li>
			}
			ACT = 1
			ACT < .NO
		}
		2 < .1
		2.wrap = <ul> | </ul>
		3 < .2
		4 < .2
	}
	
	# Language Menu
	30 = HMENU
	30 {
		# show language menu only if a uid for a second language is given
		if.isTrue = {$plugin.t3temple.lang1.uid}
		
		special = language
		special.value = 0,1
		1 = TMENU
		1 {
			noBlur = 1
		
			NO = 1
			NO {
				# Override the standard menu item value (which is the page title) with our own cObject
				stdWrap.cObject = TEXT
				  
				# Use the TypoScript option split function to display different values for the first and second item
				stdWrap.cObject.value = {$plugin.t3temple.isoCode} || {$plugin.t3temple.lang1.isoCode}
				allWrap = |*| <li class="lang">|</li> |*| <li class="lang last">|</li>
			}
		
			ACT < .NO
			ACT {
				ATagParams = class="active"
			}
		}
	}
	
	40 = TEXT
	40.value = </ul>
	40.if < .10.if	
}



## Breadcrumb
plugin.t3temple_skin_basic.breadcrumb = COA
plugin.t3temple_skin_basic.breadcrumb {
	if.isTrue = {$plugin.t3temple_skin_basic.breadcrumb}
	stdWrap.noTrimWrap = |<div class="breadcrumb">{$plugin.t3temple_skin_basic.breadcrumbYouAreHere} | </div>|
	10 = HMENU
	10 {
		special = rootline
		special.range = 0|-1
		includeNotInMenu = 1
		1 = TMENU
		1 {
			noBlur = 1
#			NO.stdWrap.field = nav_title // title
			NO.ATagTitle.field = nav_title // title
			NO.allWrap = |{$plugin.t3temple_skin_basic.breadcrumbSeperator}
			NO.stdWrap.htmlSpecialChars = 1
		}
	}
}

[globalVar = GP:tx_ttnews|tt_news > 0] && [globalVar = TSFE:id = {$plugin.tt_news.singlePid}]

plugin.t3temple_skin_basic.breadcrumb {
	10.1 {
		CUR = 1
		CUR < .NO
	}
	20 = RECORDS
	20 {
		dontCheckPid = 1
		tables = tt_news
		source.data = GP:tx_ttnews|tt_news
		source.intval = 1
		conf.tt_news = TEXT
		conf.tt_news.field = title
		wrap = <span>|</span>
	}
}
[else]

plugin.t3temple_skin_basic.breadcrumb {
	10.1 {
		CUR = 1
		CUR.stdWrap.htmlSpecialChars = 1
		CUR.allWrap = <span>|</span>
		CUR.doNotLinkIt = 1
	}
}

[global]



## Footer Menu
plugin.t3temple_skin_basic.footerMenu = HMENU
plugin.t3temple_skin_basic.footerMenu {
	if.isTrue = {$plugin.t3temple_skin_basic.footerNavPID}
	special = directory
	special.value = {$plugin.t3temple_skin_basic.footerNavPID}
	1 = TMENU
	1 {
		noBlur = 1
		wrap = <ul> | </ul>
		NO = 1
		NO {
			wrapItemAndSub = <li> | </li>
		}
	}
}
