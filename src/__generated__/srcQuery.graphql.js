/**
 * @generated SignedSource<<e3059476dcba26e3ee4c05a603027fe7>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type srcQuery$variables = {||};
export type srcQueryVariables = srcQuery$variables;
export type srcQuery$data = {|
  +races: $ReadOnlyArray<{|
    +series: string,
    +season: string,
    +round: string,
    +url: string,
    +raceName: string,
    +date: string,
  |}>,
|};
export type srcQueryResponse = srcQuery$data;
export type srcQuery = {|
  variables: srcQueryVariables,
  response: srcQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "series",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "season",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "round",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "raceName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Race",
        "kind": "LinkedField",
        "name": "races",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "srcQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Race",
        "kind": "LinkedField",
        "name": "races",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4c4d37b55063ef23649c72c38d3fd9a1",
    "id": null,
    "metadata": {},
    "name": "srcQuery",
    "operationKind": "query",
    "text": "query srcQuery {\n  races {\n    series\n    season\n    round\n    url\n    raceName\n    date\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "e5508e12ca1660a4eda304cbed273b9f";

module.exports = ((node/*: any*/)/*: Query<
  srcQuery$variables,
  srcQuery$data,
>*/);
