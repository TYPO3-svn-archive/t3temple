<?php
/***************************************************************
*  Copyright notice
*
*  (c) 2011 /gebrüderheitz Team <info@gebruederheitz.com>
*
*  This code is inspired by the importer of the TemplaVoila Framework, templavoila_framework/class.tx_templavoilaframework_t3dimport.php,
*  written by Ron Hall and the Christian Technology Ministries International Inc., 
*  
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 3 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/


/**
 * Importer for backend_layouts.t3d
 */
class Tx_T3templeSkinBasic_Service_T3dimport {

	/*
	 * main function to import backend_layouts.t3d
	 * @var array $params
	 * @var pObj
	 */
	public function main($params, $pObj) {
		$content = array();
		$fieldName = $params['fieldName'];
		$fieldValue = $params['fieldValue'];

		if (t3lib_div::_GP('doDemoImport')) {
			$this->importDemoPage();
			$flashSubject = 'Demo Page Has Been Imported';
			$flashText = 'Your import of the T3temple demo page was successful. Do not hit the import button again.';
			$flashSeverity = t3lib_flashMessage::OK;
			$justImported = FALSE;
		} elseif (t3lib_div::_GP('doImport') && $fieldValue) {
			$this->importBackendLayouts($fieldValue);
			$flashSubject = 'Backend Layouts Have Been Imported';
			$flashText = 'Your import of the Backend Layouts was successful. Do not hit the import button again.';
			$flashSeverity = t3lib_flashMessage::OK;
			$justImported = TRUE;
		} else {
			$justImported = FALSE;
		}

		if ($fieldValue) {
			$backendLayouts = t3lib_BEFunc::getRecordsByField('backend_layout', 'pid', $fieldValue);
			if (count($backendLayouts) && !$justImported) {
				$flashSubject = 'Found Existing Backend Layouts';
				$flashText = 'The SysFolder you\'ve selected for import already contains backend layouts. Clicking the import button will create new backend layouts in addition to existing backend layouts. If you are simply upgrading the T3temple Basic Skin extension, then <b>do not</b> click the Import button. Rather just click the Update button.';
				$flashSeverity = t3lib_flashMessage::WARNING;
			}

			if ($flashText) {
				$flashMessage = t3lib_div::makeInstance('t3lib_flashMessage', $flashText, $flashSubject, $flashSeverity);
				$content[] = $flashMessage->render();
			}
		}

		$content[] = '<input type="submit" name="doDemoImport" value="Import Demo Page Tree" /> <br /><br />'; 


		$content[] = '<select name="' . $fieldName . '" size="5">';

		$sysFolders = t3lib_BEFunc::getRecordsByField('pages', 'doktype', 254, '', '', 'title');
		foreach ($sysFolders as $sysFolder) {
			if ($sysFolder['uid'] == $fieldValue) {
				$selected = 'selected="selected"';
			} else {
				$selected = '';
			}

			$content[] = '<option ' . $selected . 'value="' . $sysFolder['uid'] . '">' . $sysFolder['title'] . ' (UID:' . $sysFolder['uid'] . ' PID:' . $sysFolder['pid'] . ')</option>';
		}
		$content[] = '</select>';
		$content[] = '<input type="submit" name="doImport" value="Import" />';
		$content[] = '<input type="hidden" name="submit" value="Update" />';

		return implode(chr(10), $content);
	}

	protected function importBackendLayouts($pid) {
		$backendLayoutPath = t3lib_extMgm::extPath('t3temple_skin_basic') . 'Resources/Private/T3d/backend_layouts.t3d';
		$data = null;

		if(@is_file($backendLayoutPath)) {
			require_once(t3lib_extMgm::extPath('impexp') . 'class.tx_impexp.php');
			$import = t3lib_div::makeInstance('tx_impexp');
			$import->init(0, 'import');
			$import->enableLogging = TRUE;

			if ($import->loadFile($backendLayoutPath, $loadAllData = TRUE)) {
				$data = $import->dat;
				$import->importData($pid);
			}
		}

		return $data;
	}
	
	
	protected function importDemoPage() {
		$demoPagePath = t3lib_extMgm::extPath('t3temple_skin_basic') . 'Resources/Private/T3d/T3templeDemoPage.t3d';
		$data = null;

		if(@is_file($demoPagePath)) {
			require_once(t3lib_extMgm::extPath('impexp') . 'class.tx_impexp.php');
			$import = t3lib_div::makeInstance('tx_impexp');
			$import->init(0, 'import');
			$import->enableLogging = TRUE;

			if ($import->loadFile($demoPagePath, $loadAllData = TRUE)) {
				$data = $import->dat;
				$import->importData(0);
			}
		}

		return $data;
	}


}

