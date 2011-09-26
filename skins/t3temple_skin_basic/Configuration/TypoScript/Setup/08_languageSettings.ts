config {
	# Standard Language
	sys_language_mode = content_fallback
	sys_language_uid = 0
	
	
	# Language Settings
	uniqueLinkVars          = 1
	linkVars                = L(1)
	sys_language_uid 		= 0
	sys_language_overlay 	= 1
	sys_language_mode 		= content_fallback
	language         		= {$plugin.t3temple_skin_basic.isoCode}
	locale_all       		= {$plugin.t3temple_skin_basic.locale}
	htmlTag_langKey  		= {$plugin.t3temple_skin_basic.isoCode}
}


# first foreign language
[globalVar = GP:L = 1]
config {
  sys_language_uid = {$plugin.t3temple_skin_basic.lang1.uid}
  language = {$plugin.t3temple_skin_basic.lang1.isoCode}
  locale_all = {$plugin.t3temple_skin_basic.lang1.locale}
  htmlTag_langKey = {$plugin.t3temple_skin_basic.lang1.isoCode}
}


page.headerData.1.noTrimWrap = |<title>| - {$plugin.t3temple_skin_basic.lang1.titleTag}</title>|

plugin.t3temple_skin_basic.logo {
	10.altText = {$plugin.t3temple_skin_basic.lang1.titleTag}
	10.titleText = {$plugin.t3temple_skin_basic.lang1.titleTag}
	20.altText = {$plugin.t3temple_skin_basic.lang1.titleTag}
	20.titleText = {$plugin.t3temple_skin_basic.lang1.titleTag}
}

plugin.t3temple_skin_basic.copyright.30.value = {$plugin.t3temple_skin_basic.lang1.copyrightMessage}

plugin.t3temple_skin_basic.breadcrumb.stdWrap.noTrimWrap = |<div class="breadcrumb">{$plugin.t3temple_skin_basic.lang1.breadcrumbYouAreHere} | </div>|

plugin.t3temple_skin_basic.searchForm.30.value = <input type="text" class="" id="search_field" name="tx_indexedsearch[sword]"  value="{$plugin.t3temple_skin_basic.lang1.searchWord}" title="{$plugin.t3temple_skin_basic.lang1.searchWord}"  />


[global]
