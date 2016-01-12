/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

const modules = bender.amd.require( 'ckeditor5/path', 'ckeditor5/load' );
let load, path;

before( () => {
	path = modules[ 'ckeditor5/path' ];
	load = modules[ 'ckeditor5/load' ];
} );

describe( 'load()', () => {
	it( 'loads ckeditor.js', () => {
		return load( 'ckeditor.js' )
			.then( ( CKEDITORModule ) => {
				expect( CKEDITORModule.default ).to.have.property( 'create' );
			} );
	} );

	it( 'loads core/editor', () => {
		return load( path.getModulePath( 'core/editor' ) )
			.then( ( EditorModule ) => {
				expect( EditorModule.default ).to.be.a( 'function' );
			} );
	} );
} );
