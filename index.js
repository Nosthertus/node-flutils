var fs   = require('fs');
var path = require('path');

var flutils = {
	/**
	 * Load JSON file and return parsed JSON
	 * 
	 * @param  {String} 	  file 	Directory of the file
	 * @return {Object|Array}      	Parsed JSON
	 */
	loadJSON: function(file){
		var data = fs.readFileSync(path.normalize(file));

		return JSON.parse(data);
	},

	/**
	 * Load All files in a directory
	 * 
	 * @param  {String} dir  Directory of the files to load
	 * @param  {Object} opts Options for the load
	 * @return {Object}      The object with name and content of the files
	 */
	loadAll: function(dir, opts){
		var options = opts || {};

		var files = flutils.readDir(dir, options);

		var filesObj = new Object;

		for(var i = 0; i < files.length; i++){
			if(options.type == 'json')
				filesObj[files[i]] = flutils.loadJSON(path.join(dir, files[i]));
		}

		return filesObj
	},

	/**
	 * Read the contents of a directory
	 * 
	 * @param  {String} dir  Directory to read
	 * @param  {Object} opts Options for the read
	 * @return {Array}       The list of the files contained in an object
	 */
	readDir: function(dir, opts){
		var options = opts || {};

		var directory = fs.readdirSync(path.normalize(dir));

		return directory.filter(function(file){
			return (opts.type && opts.type == flutils.normalizeExt(path.extname(file)));
		});
	},

	/**
	 * Normalize an extension name, removig the dot
	 * 
	 * @param  {String} ext The extension/file to normalize
	 * @return {String}     The normalized extension
	 */
	normalizeExt: function(ext){
		return ext.split('.')[1];
	},

	/**
	 * Checks if a file/folder exists, executing try/catch
	 * 
	 * @param  {String} dir  The directory folder/file to check
	 * @return {Boolean}     Whether the folder/file exists
	 */
	dirExists: function(dir){
		try{
			fs.accessSync(dir, fs.F_OK)
			return true;
		}
		catch(e){
			return false;
		}
	}
};

module.exports = flutils;