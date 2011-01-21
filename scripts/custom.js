$(document).ready(function() {
  $('#header').html('<div id="working">Working...</div><div id="box"><input type="text" id="quickfind"/><a id="cleanfilters" href="#">X</a></div><div id="instructions">There may be mistakes in variable labels! Use with caution. <b>&bull;</b> Use the web browser find (Ctrl-F) for quick searches. <b>&bull;</b> Enclose phrases in quotes (") to match the entire phrase. <b>&bull;</b> Use "not" to exclude a match from the results (e.g. age not child). <b>&bull;</b> Use "or" to query a union of searches (e.g. age or risk). <b>&bull;</b> <b>Be patient</b> &ndash; there are a lot of data to look through.</div>');
      // Initialise Plugin
var grid = $('#vartable');
      var options1 = {
          additionalFilterTriggers: [$('#quickfind')],
          clearFiltersControls: [$('#cleanfilters')],
          filteringRows: function(filterStates) {
          },
	filteredRows: function(filterStates) {
		$('#working').hide();
		setRowCountOnGrid();
          }
      };

      grid.tableFilter(options1);
$('input:text').keypress(function() {
	$('#working').show();
	$('#instructions').hide();
});


function setRowCountOnGrid() {
	var rowcount = grid.find('tbody tr:not(:hidden)').length;
	$('#rowcount').text('(' + rowcount + ')');
}

setRowCountOnGrid();
$('#quickfind').focus();
  });