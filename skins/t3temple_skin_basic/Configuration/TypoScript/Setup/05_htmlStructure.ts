## Build the HTML structure using TypoScript
## The structure is according to the TemplaVoila Framework by Ron Hall and the Christian Technology Ministries International Inc.


## Code before the Header
preCodeHeader >
preCodeHeader = HTML
preCodeHeader.value = <div id="center-page"><div id="header">

## Header
header >
header = COA
header.10 =< plugin.t3temple_skin_basic.metaNavigation
header.20 =< plugin.t3temple_skin_basic.logo
header.30 =< plugin.t3temple_skin_basic.mainMenu
header.40 =< plugin.t3temple_skin_basic.searchForm

## Code after the Header
postCodeHeader >
postCodeHeader = HTML
postCodeHeader.value = </div>

## Code before the Feature
preCodeFeature >
preCodeFeature = TEXT
preCodeFeature.value = <div id="stage">

feature >
# the feature area just gets content from colPos = 1
feature < styles.content.get
feature.select.where = colPos = 1

## Code after the Feature
postCodeFeature >
postCodeFeature = TEXT
postCodeFeature.value = </div>


## Code before the Main Content
preCodeContent >
preCodeContent = HTML
preCodeContent.value = <div id="main">


## Code before Sidebar 1 / Generated Content 1
preCodeGeneratedContent-1 >
preCodeGeneratedContent-1 = HTML
preCodeGeneratedContent-1.value = <div id="sidebar" class="first">

## Code after Sidebar 1 / Generated Content 1
postCodeGeneratedContent-1 >
postCodeGeneratedContent-1 = HTML
postCodeGeneratedContent-1.value = </div>

## Code around the Content Area 1
preCodeContentBlock-1 >
preCodeContentBlock-1 = HTML
preCodeContentBlock-1.value = <div id="content">

postCodeContentBlock-1 >
postCodeContentBlock-1 = HTML
postCodeContentBlock-1.value = </div>

## Code around the Content Area 2
preCodeContentBlock-2 >
preCodeContentBlock-2 = HTML
preCodeContentBlock-2.value = <div id="sidebar" class="second">

postCodeContentBlock-2 >
postCodeContentBlock-2 = HTML
postCodeContentBlock-2.value = </div>

## Code around the Content Area 3
preCodeContentBlock-3 >
preCodeContentBlock-3 = HTML
preCodeContentBlock-3.value = <div id="sidebar" class="third">

postCodeContentBlock-3 >
postCodeContentBlock-3 = HTML
postCodeContentBlock-3.value = </div>

## Code around the Generated Content Area 2
preCodeGeneratedContent-2 >
preCodeGeneratedContent-2 = HTML
preCodeGeneratedContent-2.value = <div id="sidebar" class="third">

postCodeGeneratedContent-2 >
postCodeGeneratedContent-2 = HTML
postCodeGeneratedContent-2.value = </div>


## Code before and after the Footer
preCodeFooter >
preCodeFooter = COA
preCodeFooter {
	10 = TEXT
	10.value = </div> 

	20 = COA
	20.wrap = <div id="bottom"> | </div>
	20.10 < styles.content.get
	20.10.select.where = colPos = 10
	20.if.isTrue.numRows < styles.content.get
	20.if.isTrue.numRows.select.where = colPos = 10

	30 = HTML
	30.value = <div id="footer"><div class="inner">
}


### Footer ###
footer >
footer = COA
footer.10 =< plugin.t3temple_skin_basic.breadcrumb
footer.20 =< plugin.t3temple_skin_basic.copyright
footer.30 =< plugin.t3temple_skin_basic.footerMenu


postCodeFooter >
postCodeFooter = COA
postCodeFooter.10 = TEXT
postCodeFooter.10.value (

</div></div>
</div> 

)

postCodeFooter.20 = TEXT
postCodeFooter.20.wrap = <div id="t3temple_footer"> | </div>
postCodeFooter.20.value = <img src="{$plugin.t3temple_skin_basic.resourcePath}images/t3temple_footer.png" alt="t3temple - Getting Skins Done" /> 


postCodeFooter.30 = TEXT
postCodeFooter.30.value = <div id="scrollUpButton"><img src="{$plugin.t3temple_skin_basic.resourcePath}images/icon_arrow-up.png" alt="Up" /></div>



### Basic Template

plugin.t3temple_skin_basic.htmlStructure = COA
plugin.t3temple_skin_basic.htmlStructure {

	# Code before and after the Header
	10 =< preCodeHeader
    
    20 =< header
    30 =< postCodeHeader
    40 = COA
    40 {
      # render the feature area only if there is content in colPos = 1
      if.isTrue.numRows < styles.content.get
	  if.isTrue.numRows.select.where = colPos = 1
      10 =< preCodeFeature
      20 =< feature
      30 =< postCodeFeature
    }

    50 =< preCodeContent

    # 100 and 200 are reservated for the sidebar 1 and 2 on left side
    
    300 =< plugin.t3temple_skin_basic.mainContent
    
    # 300 and 400 are reservated for the sidebar 1 and 2 on right side

    600 =< preCodeFooter
    610 =< footer
    620 =< postCodeFooter
}



### Add the sidebar elements if a sidebar is chosen

[globalVar=TSFE:page|layout=0]
plugin.t3temple_skin_basic.mainContent.stdWrap.wrap = <div id="content" class="fullwidth"> | </div>
  
[globalVar=TSFE:page|layout=1]
plugin.t3temple_skin_basic.htmlStructure {
    400 =< preCodeGeneratedContent-1
    410 =< plugin.t3temple_skin_basic.sidebar-1
    420 =< postCodeGeneratedContent-1
}

[globalVar=TSFE:page|layout=2]
plugin.t3temple_skin_basic.htmlStructure {
    500 =< preCodeGeneratedContent-2
    510 =< plugin.t3temple_skin_basic.sidebar-2
    520 =< postCodeGeneratedContent-2
}

  
[globalVar=TSFE:page|layout=3]
plugin.t3temple_skin_basic.htmlStructure {

    100 =< preCodeGeneratedContent-1
    100.value = <div id="sidebar" class="left">
    110 =< plugin.t3temple_skin_basic.sidebar-1
    120 =< postCodeGeneratedContent-1
}

[globalVar=TSFE:page|layout=4]
plugin.t3temple_skin_basic.htmlStructure {
    200 =< preCodeGeneratedContent-2
    200.value = <div id="sidebar" class="left">
    210 =< plugin.t3temple_skin_basic.sidebar-2
    220 =< postCodeGeneratedContent-2
}


[global]


