import $ from "jquery";
import Bootstrap from './bootstrap_classes';
import { searchObj, showTable} from './functions';

(function() {
  let delayTimer; 

  $('#query').on('input', function () {
    let query = $(this).val();
    $('#bootstrap_table').parent().addClass('d-none');

    clearTimeout(delayTimer);
    delayTimer = setTimeout(function() {
      showTable($('#bootstrap_table'), searchObj(query, Bootstrap));
    }, 1000);
  })
})();
