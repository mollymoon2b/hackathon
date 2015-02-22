/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	config.language = 'fr';
	config.uiColor = '#FF9128';
	config.startupOutlineBlocks = true;


	// %REMOVE_START%
	config.plugins =

		'basicstyles,' +
		'colorbutton,' +
		'colordialog,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'elementspath,' +
		'font,' +
		'format,' +
		'resize,' +
		'showblocks,' +
		'sourcearea,' +
		'toolbar,' +
		'image,' +
		'undo,' +
		'wysiwygarea';
	// %REMOVE_END%
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
