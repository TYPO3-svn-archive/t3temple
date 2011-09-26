<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

/**
 * Register static Typoscript Template
 */
t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/', 'T3temple Basic Skin');


/**
 * Rename the columns in the page layout
 */
$TCA['tt_content']['columns']['colPos']['config']['items'] = array (  
'1' => array ('Top||Top||||||||','1'),  
'0' => array ('Main Content||Main Content||||||||','0'),  
'2' => array ('Second Column||Second Column||||||||','2'),  
'3' => array ('Third Column||Third Column||||||||','3'),  
'4' => array ('Forth Column||Forth Column||||||||','4'),  
'10' => array ('Bottom||Bottom||||||||','10')  
);


?>
