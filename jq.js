   $(document).on("click", "fieldset > button.toggle-password", function(){
  $(this).siblings("input").prop("type", (index, type) => type === "password" ? "text" : "password");
});