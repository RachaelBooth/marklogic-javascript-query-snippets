function elementValueQuery(name, namespace, value) {
    return cts.elementValueQuery(fn.QName(namespace, name), value);
}

/*
  Querying example - documents in a given directory with value foo for the "name" element
*/
const query = cts.andQuery([cts.directoryQuery("/some-dir/"), elementValueQuery("name", "namespace", "foo")]);
for (var result of cts.search(query)) {
    // do something
}