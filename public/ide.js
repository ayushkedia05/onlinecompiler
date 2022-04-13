let editor;
window.onload=function()
{

  editor = ace.edit("editor");
  editor.setTheme("ace/theme-monokai.js");
  editor.session.setMode("ace/mode-javascript.js");
}
