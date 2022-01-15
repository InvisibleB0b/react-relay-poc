/**
 * @generated SignedSource<<98d38ebf75902c1b38454a3ace54e2d7>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type srcRacesQuery$variables = {||};
export type srcRacesQueryVariables = srcRacesQuery$variables;
export type srcRacesQuery$data = {|
  +races: $ReadOnlyArray<{|
    +series: string,
    +season: string,
    +round: string,
    +url: string,
    +raceName: string,
    +date: string,
  |}>,
|};
export type srcRacesQueryResponse = srcRacesQuery$data;
export type srcRacesQuery = {|
  variables: srcRacesQueryVariables,
  response: srcRacesQuery$data,
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
    "name": "srcRacesQuery",
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
    "name": "srcRacesQuery",
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
    "cacheID": "f984929a1e172b4d9c935c2fb5eecc06",
    "id": null,
    "metadata": {},
    "name": "srcRacesQuery",
    "operationKind": "query",
    "text": "query srcRacesQuery {\n  races {\n    series\n    season\n    round\n    url\n    raceName\n    date\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "3a5ce4862ee9c699480d7dd9ec3ebb09";

module.exports = ((node/*: any*/)/*: Query<
  srcRacesQuery$variables,
  srcRacesQuery$data,
>*/);
