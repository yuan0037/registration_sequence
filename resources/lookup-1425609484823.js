(function(window, undefined) {
  var dictionary = {
    "5315c18d-3e54-4148-bbe0-1a95934b8730": "Registration_Step3",
    "f0580174-3ad3-462f-8812-ff4bcecac118": "Registration_Step2",
    "74025c6e-1661-493f-8878-7d9a0f1cc1b6": "Registration_Step2_Error",
    "68503a7d-e959-40d2-95b6-e671729aeb29": "Registration_Step1",
    "38e74314-24eb-48d1-af2a-237f6813a0de": "extra addons",
    "d1048a6e-780c-4b06-bce4-7b56074ae2d4": "Registration_Step_Finished",
    "b25617ac-3c30-419a-a041-d8c339a8b931": "Loading Screen",
    "cc5c9bd5-aaf6-489b-8661-cede3e146593": "Side_Panel_1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);