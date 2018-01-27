var searchIndex = {};
searchIndex["tokio_serde_json"] = {"doc":"`Stream` and `Sink` adaptors for serializing and deserializing values using JSON.","items":[[3,"ReadJson","tokio_serde_json","Adapts a stream of JSON encoded buffers to a stream of values by deserializing them.",null,null],[3,"WriteJson","","Adapts a buffer sink to a value sink by serializing the values as JSON.",null,null],[11,"new","","Creates a new `ReadJson` with the given buffer stream.",0,{"inputs":[{"name":"t"}],"output":{"name":"readjson"}}],[11,"get_ref","","Returns a reference to the underlying stream wrapped by `ReadJson`.",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"get_mut","","Returns a mutable reference to the underlying stream wrapped by `ReadJson`.",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"into_inner","","Consumes the `ReadJson`, returning its underlying stream.",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"poll","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"poll"}}],[11,"start_send","","",0,null],[11,"poll_complete","","",0,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"close","","",0,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"new","","Creates a new `WriteJson` with the given buffer sink.",1,{"inputs":[{"name":"t"}],"output":{"name":"writejson"}}],[11,"get_ref","","Returns a reference to the underlying sink wrapped by `WriteJson`.",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"get_mut","","Returns a mutable reference to the underlying sink wrapped by `WriteJson`.",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"into_inner","","Consumes the `WriteJson`, returning its underlying sink.",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"start_send","","",1,{"inputs":[{"name":"self"},{"name":"u"}],"output":{"name":"startsend"}}],[11,"poll_complete","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"close","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",1,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"poll"}}]],"paths":[[3,"ReadJson"],[3,"WriteJson"]]};
initSearch(searchIndex);
