## Page Setup

## Define the doctype
config {	
	# Define Doctype
	doctype = xhtml_trans
	xmlprologue = none
	doctypeSwitch = 1

	# Comment in <head> tag
	headerComment (
	    Based on the T3temple Basic Skin - http://t3temple.com
	 ===
	)
}


## indexed search for the content area
[globalVar = LIT:0 < {$plugin.t3temple_skin_basic.searchPID} ]
styles.content.get {
	stdWrap {
		required = 1
		wrap2 = <!--TYPO3SEARCH_begin--> | <!--TYPO3SEARCH_end-->
	}
}
[global]



## Build the Page Object
page >
page = PAGE
page.typeNum = 0
page.10 =< plugin.t3temple_skin_basic.htmlStructure


## Include CSS
page.includeCSS.file1 = {$plugin.t3temple_skin_basic.resourcePath}css/reset.css
page.includeCSS.file2 = {$plugin.t3temple_skin_basic.resourcePath}css/screen.css
page.includeCSS.file3 = {$plugin.t3temple_skin_basic.resourcePath}css/backend-layouts.css
page.includeCSS.file4 = {$plugin.t3temple_skin_basic.resourcePath}css/orbit-1.2.3.css
page.includeCSS.file5 = {$plugin.t3temple_skin_basic.resourcePath}css/jquery.lightbox-0.5.css
page.includeCSS.file6 = {$plugin.t3temple_skin_basic.resourcePath}css/lightbox.css
page.includeCSS.file8 = {$plugin.t3temple_skin_basic.variantCSS}
page.includeCSS.file9 = {$plugin.t3temple_skin_basic.customCSS}

# page.includeCSS.file7 is for the CSS file to meet the needs of the TemplaVoila Framework
# it is included in EXT_KEY/typoscript/skin_typoscript.txt


## Include JS at the end of the page
page.20 = TEXT
page.20.value (
<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript">!window.jQuery && document.write('<script type="text/javascript" src="{$plugin.t3temple_skin_basic.resourcePath}js/jquery/1.5.1/jquery.min.js"><\/script>')</script>
)

page.includeJS.file1 = {$plugin.t3temple_skin_basic.resourcePath}js/orbit/jquery.orbit-1.2.3.min.js
page.includeJS.file2 = {$plugin.t3temple_skin_basic.resourcePath}js/lightbox/jquery.lightbox-0.5.js
page.includeJS.file3 = {$plugin.t3temple_skin_basic.resourcePath}js/jquery.superfish.js
page.includeJS.file4 = {$plugin.t3temple_skin_basic.resourcePath}js/main.js

# put the javascript files to the end
config.moveJsFromHeaderToFooter = 1



## Meta-Tags keywords and description
page.meta.keywords.data = register:newsKeywords // field : keywords
page.meta.description.data = register:newsSubheader // field : description



## Title Tag
config.noPageTitle = 1
page.headerData.1 = TEXT
page.headerData.1 {
  field = title
  noTrimWrap = |<title>| - {$plugin.t3temple_skin_basic.titleTag}</title>|
}

## Favicon
page.shortcutIcon = {$plugin.t3temple_skin_basic.favicon}
