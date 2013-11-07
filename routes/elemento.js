exports.editor = function(req, res){
  res.render('editor', {title: "Editor"})
};
exports.guardar = function(req, res) {
  console.log(req);
}