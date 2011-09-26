## Main Content
## Contains the column mechanism and the logic for the backend layouts (grid views)

## Backend Layouts

# one column with 100%
plugin.t3temple_skin_basic.col-100 = COA
plugin.t3temple_skin_basic.col-100 {
  wrap = <div class="col-100"> | </div>

  10 = LOAD_REGISTER
  10.maxImageWidth = 920

  20 < styles.content.get
  20.select.where = colPos = 0
  20.wrap =  <div class="col col-1"> | </div> 
}


# template for all two column types
temp.twoColumns = COA
temp.twoColumns {

  10 = LOAD_REGISTER
  10.maxImageWidth = 443

  20 < styles.content.get
  20.select.where = colPos = 0
  20.wrap =  <div class="col col-1"> | </div> 

  30 = LOAD_REGISTER
  30.maxImageWidth = 443

  40 < styles.content.get
  40.select.where = colPos = 2
  40.wrap =  <div class="col col-2"> | </div> 

}

plugin.t3temple_skin_basic.col-50-50 < temp.twoColumns
plugin.t3temple_skin_basic.col-50-50 {
	wrap = <div class="col-50-50"> | </div>
	10.maxImageWidth = 443
	20.select.where = colPos = 0
	30.maxImageWidth = 443
	40.select.where = colPos = 2
}

plugin.t3temple_skin_basic.col-33-66 < temp.twoColumns
plugin.t3temple_skin_basic.col-33-66 {
	wrap = <div class="col-33-66"> | </div>
	10.maxImageWidth = 285
	20.select.where = colPos = 2
	30.maxImageWidth = 590
	40.select.where = colPos = 0
}

plugin.t3temple_skin_basic.col-66-33 < temp.twoColumns
plugin.t3temple_skin_basic.col-66-33 {
	wrap = <div class="col-66-33"> | </div>
	10.maxImageWidth = 590
	20.select.where = colPos = 0
	30.maxImageWidth = 285
	40.select.where = colPos = 2
}

plugin.t3temple_skin_basic.col-25-75 < temp.twoColumns
plugin.t3temple_skin_basic.col-25-75 {
	wrap = <div class="col-25-75"> | </div>
	10.maxImageWidth = 212
	10.select.where = colPos = 2
	30.maxImageWidth = 674
	10.select.where = colPos = 0
}

plugin.t3temple_skin_basic.col-75-25 < temp.twoColumns
plugin.t3temple_skin_basic.col-75-25 {
	wrap = <div class="col-75-25"> | </div>
	10.maxImageWidth = 674
	20.select.where = colPos = 0
	30.maxImageWidth = 212
	40.select.where = colPos = 2
}
  

# three columns with 33% each
plugin.t3temple_skin_basic.col-33-33-33 = COA
plugin.t3temple_skin_basic.col-33-33-33 {
  wrap = <div class="col-33-33-33"> | </div>  

  10 = LOAD_REGISTER
  10.maxImageWidth = 285

  20 < styles.content.get
  20.select.where = colPos = 0
  20.wrap =  <div class="col col-1"> | </div> 

  30 < styles.content.get
  30.select.where = colPos = 2
  30.wrap =  <div class="col col-2"> | </div> 

  40 < styles.content.get
  40.select.where = colPos = 3
  40.wrap =  <div class="col col-3"> | </div> 
}


# four columns with 25% each
plugin.t3temple_skin_basic.col-25-25-25-25 = COA
plugin.t3temple_skin_basic.col-25-25-25-25 {
  wrap = <div class="col-25-25-25-25"> | </div>
  
  10 = LOAD_REGISTER
  10.maxImageWidth = 212

  20 < styles.content.get
  20.select.where = colPos = 0
  20.wrap =  <div class="col col-1"> | </div> 

  30 < styles.content.get
  30.select.where = colPos = 2
  30.wrap =  <div class="col col-2"> | </div> 

  40 < styles.content.get
  40.select.where = colPos = 3
  40.wrap =  <div class="col col-3"> | </div> 

  50 < styles.content.get
  50.select.where = colPos = 4
  50.wrap =  <div class="col col-4"> | </div> 

}



# column mechanism if no Backend Layout is chosen:
# 1. if only main content is filled with content, show only one column with 100% width
# 2. if second culomn is filled with content, show main content with 66% and second culomn with 33%
# 3. if second and third culomn are filled with content, show main content, second and third culomn with 33% each


plugin.t3temple_skin_basic.noBackendLayout = COA
plugin.t3temple_skin_basic.noBackendLayout {
	# 1. if only main content is filled with content, show only one column with 100% width
	# copy the settings from plugin.t3temple_skin_basic.col-100
	10 < plugin.t3temple_skin_basic.col-100
	10 {
      if.isFalse.numRows < styles.content.get
	  if.isFalse.numRows.select.where = colPos = 2
	  if.value=1
	  if.isLessThan.numRows < styles.content.get
	  if.isLessThan.numRows.select.where = colPos = 3
	}

	# 2. if second culomn is filled with content but third column not, show main content with 66% and second culomn with 33%
	# copy the settings from plugin.t3temple_skin_basic.col-66-33
	20 < plugin.t3temple_skin_basic.col-66-33
	20 {
      if.isTrue.numRows < styles.content.get
	  if.isTrue.numRows.select.where = colPos = 2
	  if.isFalse.numRows < styles.content.get
	  if.isFalse.numRows.select.where = colPos = 3
	}


	# 3. if second and third culomn are filled with content, show main content, second and third culomn with 33% each
	# copy the settings from plugin.t3temple_skin_basic.col-33-33-33
	30 < plugin.t3temple_skin_basic.col-33-33-33
	30 {
      if.isTrue.numRows < styles.content.get
	  if.isTrue.numRows.select.where = colPos = 2
	  if.isPositive.numRows < styles.content.get
	  if.isPositive.numRows.select.where = colPos = 3
	}
}



## If a sidebar exists, the images have to be smaller

[globalVar=TSFE:page|layout > 0]

plugin.t3temple_skin_basic.col-100.10.maxImageWidth = 639
plugin.t3temple_skin_basic.noBackendLayout.10.10.maxImageWidth = 639

plugin.t3temple_skin_basic.col-50-50.10.maxImageWidth = 308
plugin.t3temple_skin_basic.col-50-50.30.maxImageWidth = 308

plugin.t3temple_skin_basic.col-33-66.10.maxImageWidth = 198
plugin.t3temple_skin_basic.col-33-66.30.maxImageWidth = 409

plugin.t3temple_skin_basic.col-66-33.10.maxImageWidth = 409
plugin.t3temple_skin_basic.col-66-33.30.maxImageWidth = 198
plugin.t3temple_skin_basic.noBackendLayout.20.10.maxImageWidth = 409
plugin.t3temple_skin_basic.noBackendLayout.20.30.maxImageWidth = 198

plugin.t3temple_skin_basic.col-25-75.10.maxImageWidth = 147
plugin.t3temple_skin_basic.col-25-75.30.maxImageWidth = 464

plugin.t3temple_skin_basic.col-75-25.10.maxImageWidth = 464
plugin.t3temple_skin_basic.col-75-25.30.maxImageWidth = 147

plugin.t3temple_skin_basic.col-33-33-33.10.maxImageWidth = 198
plugin.t3temple_skin_basic.noBackendLayout.30.10.maxImageWidth = 198

plugin.t3temple_skin_basic.col-25-25-25-25.10.maxImageWidth = 148

[global]



### create HTML according to backend layout
plugin.t3temple_skin_basic.mainContent = CASE
plugin.t3temple_skin_basic.mainContent {
   stdWrap.wrap = <div id="content"> | </div>

   # first look whether there is a backend layout "next level" in one of the parent pages (root line)
   key.data = levelfield:-2,backend_layout_next_level,slide

   # override this field if the page itself has a value for the backend layout
   key.override.field = backend_layout

   # choose the column settings according to the uid of the backend layout
   0 =< plugin.t3temple_skin_basic.noBackendLayout
   1 =< plugin.t3temple_skin_basic.col-100
   2 =< plugin.t3temple_skin_basic.col-50-50
   3 =< plugin.t3temple_skin_basic.col-33-33-33
   4 =< plugin.t3temple_skin_basic.col-33-66
   5 =< plugin.t3temple_skin_basic.col-66-33
   6 =< plugin.t3temple_skin_basic.col-25-25-25-25
   7 =< plugin.t3temple_skin_basic.col-25-75
   8 =< plugin.t3temple_skin_basic.col-75-25
   
   # if no backend layout is chosen use the column mechanism 
   default =< plugin.t3temple_skin_basic.noBackendLayout
}

