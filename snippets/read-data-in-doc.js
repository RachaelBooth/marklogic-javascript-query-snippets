/*
  Returns the text content of the node with given name in the given document
  E.g. for document;
  <foo xmlns="bar">
    <baz>Hello</baz>
  </foo>
  GetTextValue(doc, "baz", "bar") would return "Hello"
*/
function GetTextValue(doc, name, namespace) {
    return doc ? doc.getElementsByTagNameNS(namespace, name).item(0).textContent : "";
}

/*
  Returns the text content of the node with given name in the document at given uri
*/
function GetTextValueFromUri(uri, name, namespace) {
    let doc = cts.doc(uri);
    return GetTextValue(doc, name, namespace);
}