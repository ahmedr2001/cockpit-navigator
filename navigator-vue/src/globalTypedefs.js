/**
 * @typedef {Object} NavigatorSettings
 * @property {Object} directoryView - Settings for directory view
 * @property {String} directoryView.view - 'list' - list view, otherwise grid view
 * @property {Boolean} directoryView.showHidden - show/hide entries starting with '.'
 * @property {Boolean} directoryView.separateDirs - separate or interleave files and directories while sorting
 * @property {Object} directoryView.cols - Booleans of whether or not to show columns in list view
 * @property {Boolean} directoryView.cols.mode - Show the mode column
 * @property {Boolean} directoryView.cols.owner - Show the owner column
 * @property {Boolean} directoryView.cols.group - Show the group column
 * @property {Boolean} directoryView.cols.size - Show the size column
 * @property {Boolean} directoryView.cols.ctime - Show the creation time column
 * @property {Boolean} directoryView.cols.mtime - Show the modification time column
 * @property {Boolean} directoryView.cols.atime - Show the access time column
 */