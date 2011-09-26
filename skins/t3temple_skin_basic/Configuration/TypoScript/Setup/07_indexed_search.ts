## Configuration for indexed_search

config {
	# indexed search
	index_enable = 1
	index_externals = 1
}


plugin.tx_indexedsearch {

	templateFile = typo3conf/ext/t3temple_skin_basic/Resources/Private/Templates/ExtensionTemplates/indexed_search/tx_indexedsearch_pi1_template.html
	forwardSearchWordsInResultLink = 0
        show {        
        	rules = 0
        	advancedSearchLink = 0
        }
	search {
		rootPidList =
		exactCount = 1
	}

	_CSS_DEFAULT_STYLE >
	_DEFAULT_PI_VARS {
		results = 10
	}
}

# Adjust search results when visitor has chosen another language
[globalVar = GP:L = 1]
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = {$plugin.t3temple_skin_basic.lang1.uid}
[global]



## Search Form ##
plugin.t3temple_skin_basic.searchForm >
plugin.t3temple_skin_basic.searchForm = COA
plugin.t3temple_skin_basic.searchForm {
  if.isTrue = {$plugin.t3temple_skin_basic.searchPID}
  wrap = <div class="search"> | </div>
  20 = TEXT
  20.typolink {
    parameter = {$plugin.t3temple_skin_basic.searchPID}
    returnLast = url
  }
  20.wrap = <form action="|" method="post" id="searchform" >
  30 = TEXT
  30 {
  	insertData = 1
    value = <input type="text" class="" id="search_field" name="tx_indexedsearch[sword]"  value="{$plugin.t3temple_skin_basic.searchWord}" title="{$plugin.t3temple_skin_basic.searchWord}"  />
  }
  40 = TEXT
  40.value (
		<input type="submit" name="submit" value="" />
		<input type="hidden" name="tx_indexedsearch[type]" value="1">
		<input type="hidden" name="tx_indexedsearch[_sections]" value="0" />
		<input type="hidden" name="tx_indexedsearch[pointer]" value="0" />
		<input type="hidden" name="tx_indexedsearch[ext]" value="0" />
		<input type="hidden" name="tx_indexedsearch[lang]" value="0" />
	</form>
)
  }
}
