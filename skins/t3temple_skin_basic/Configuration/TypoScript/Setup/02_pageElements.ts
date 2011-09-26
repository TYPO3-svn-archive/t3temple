## Page Elements to include on specific areas of the page
## 1. Logo
## 2. Sidebar 1 and 2
## 3. Copyright notice

## Logo
plugin.t3temple_skin_basic.logo = COA
plugin.t3temple_skin_basic.logo {
	# if plugin.t3temple.logoLink or plugin.t3temple_skin_basic.logoLink is not set, use the root page
	10 = IMAGE
	10 {
		file = {$plugin.t3temple_skin_basic.logoFile}
		wrap = <div id="logo"> | </div>
		altText = {$plugin.t3temple_skin_basic.titleTag}
		titleText = {$plugin.t3temple_skin_basic.titleTag}
		imageLinkWrap = 1
		imageLinkWrap.enable = 1
		imageLinkWrap.typolink.parameter.data = leveluid : 0
		if.isFalse = {$plugin.t3temple_skin_basic.logoLink}
	}
	# if plugin.t3temple.logoLink or plugin.t3temple_skin_basic.logoLink is set, use this PID
	20 = IMAGE
	20 {
		file = {$plugin.t3temple_skin_basic.logoFile}
		wrap = <div id="logo"> | </div>
		altText = {$plugin.t3temple_skin_basic.titleTag}
		titleText = {$plugin.t3temple_skin_basic.titleTag}
		imageLinkWrap = 1
		imageLinkWrap.enable = 1
		imageLinkWrap.typolink.parameter = {$plugin.t3temple_skin_basic.logoLink}
		if.isTrue = {$plugin.t3temple_skin_basic.logoLink}
	}
}



## Sidebar 1 and 2: Content Elements from Sysfolders set in the Constant Editor
plugin.t3temple_skin_basic.sidebar-1 = CONTENT
plugin.t3temple_skin_basic.sidebar-1 {
  wrap = <div id="sidebar-1"> | </div>
  table = tt_content
  select.pidInList = {$plugin.t3temple_skin_basic.sidebar1PID}
  select.languageField = sys_language_uid
}

plugin.t3temple_skin_basic.sidebar-2 = CONTENT
plugin.t3temple_skin_basic.sidebar-2 {
  wrap = <div id="sidebar-2"> | </div>
  table = tt_content
  select.pidInList = {$plugin.t3temple_skin_basic.sidebar2PID}
  select.languageField = sys_language_uid
}

## if a searchPID is given, include the comments for indexed search
[globalVar = LIT:0 < {$plugin.t3temple_skin_basic.searchPID} ]
plugin.t3temple_skin_basic.sidebar-1.wrap = <div id="sidebar-1"><!--TYPO3SEARCH_begin--> | <!--TYPO3SEARCH_end--></div>
plugin.t3temple_skin_basic.sidebar-2.wrap = <div id="sidebar-2"><!--TYPO3SEARCH_begin--> | <!--TYPO3SEARCH_end--></div>
[global]



## Copyright
plugin.t3temple_skin_basic.copyright = COA
plugin.t3temple_skin_basic.copyright {
  wrap = <div class="copyright"> | </div>
  10 = TEXT
  10.value = Copyright &copy; 
  20 = TEXT
  20 {
    data = date : U
    strftime = %Y
    wrap = &nbsp;|&nbsp;
  }
  30 = TEXT
  30.value = {$plugin.t3temple_skin_basic.copyrightMessage}  
}

## Copyright - second defition
## -> Make it simpler to change the whole copyright message
plugin.t3temple_skin_basic.copyright >
plugin.t3temple_skin_basic.copyright = TEXT
plugin.t3temple_skin_basic.copyright.value = {$plugin.t3temple_skin_basic.copyrightMessage}
plugin.t3temple_skin_basic.copyright.wrap = <div class="copyright"> | </div>

