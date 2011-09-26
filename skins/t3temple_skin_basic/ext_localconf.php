<?php

// for compatibility with templavoila_framework
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['templavoila_framework']['skins'][] = $_EXTKEY;
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['t3temple']['skins'][] = $_EXTKEY;

// add some Page TSConfig
t3lib_extMgm::addPageTSConfig('

# Show only the chosen columns in the page module
# 0=normal, 1=left, 
# in our case 0 is above 1, both have the full width
# mod.SHARED.colPos_list = 0,1

[globalVar = TSFE:page|backend_layout = 1,2,3,4,5,6,7,8]
mod.SHARED.colPos_list=0,1,2,3,4,10
[global]

TCEFORM.tt_content.altLabels.0 = Main Content
TCEFORM.tt_content.altLabels.1 = Header
TCEFORM.tt_content.altLabels.2 = Second Column
TCEFORM.tt_content.altLabels.3 = Third Column
TCEFORM.tt_content.altLabels.4 = Fourth Column
TCEFORM.tt_content.altLabels.10 = Footer




# generated content
TCEFORM {	
  pages {
    layout.altLabels.0 = Default (no Sidebar)
    layout.altLabels.1 = Sidebar 1 on right side
    layout.altLabels.2 = Sidebar 2 on right side
    layout.altLabels.3 = Sidebar 1 on left side
  }
}

# add another element
TCEFORM.pages.layout {
     addItems.4 = Sidebar 2 on left side
}


# Slider for Content Element Images
TCEFORM.tt_content {
  layout.altLabels.0 = Normal
}
TCEFORM.tt_content.layout.removeItems = 1,2,3

# remove all Frames
TCEFORM.tt_content.section_frame {
     removeItems = 1,5,6,10,11,12,20,21
}


# add the frame for the slider
TCEFORM.tt_content.section_frame {
     addItems.30 = Slider (use only for type Images in Top area)
}

# add sitemap item "Menu of pages on same level"
TCEFORM.tt_content.menu_type {
    addItems {
        8 = Menu of pages on same level
    }
}
');


?>