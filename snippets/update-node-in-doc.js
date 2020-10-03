/*
  Basic replacing a node example

  If the existing document at document-uri.xml is the following;
    <my:doc xmlns:my="example/my">
      <my:name>Example Doc</my:name>
      <my:foo>old value</my:foo>
    </my:doc>

  The code below will update it to;
    <my:doc xmlns:my="example/my">
      <my:name>Example Doc</my:name>
      <my:foo my-attribute="bar">baz</my:foo>
    </my:doc>
*/

// Build a node
let nodeBuilder = new NodeBuilder();
nodeBuilder.startElement("my:foo", "example/my");
nodeBuilder.addAttribute("my-attribute", "bar");
nodeBuilder.addText("baz");
nodeBuilder.endElement();
let node = nodeBuilder.toNode();

// Replace old node (in this example, of the same element)
let uri = "document-uri.xml"
xdmp.nodeReplace(cts.doc(uri).xpath("/my:doc/my:foo", { "my": "example/my" }), node);

/* 
  N.B. To run the above, you will need to start the query with declareUpdate(), and end with xdmp.commit().
  Or, omit the xdmp.commit to not save the changes (useful for testing that queries will run/what the output will be).
*/