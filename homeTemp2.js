<script>
function getCellContent(id) {
  var x = document.getElementById(id).rows[0].cells;
  document.getElementById("demo").innerHTML = x[0].innerHTML;
}
</script>
