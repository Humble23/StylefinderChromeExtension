export function searchObj(query, dataObj) {
  if (!query) return "";

  let rows = "";
  let dataObjClasses = Object.entries(dataObj)[0][1];
  let result = Object.entries(dataObjClasses).filter(function (value) {
    let key = value[0];
    let obj = value[1];

    return key.includes(query) || obj.description.includes(query);
  });

  result.forEach(function (value) {
    value = value[1];
    rows += `<tr><td>${value.class}</td><td>${value.description}</td></tr>`;
    console.log(rows);
  });
  
  return rows;
}

export function showTable($table, data)
{
  if (data) {
    $table.parent().removeClass('d-none');
  }

  $table.find('tbody').html(data);
}