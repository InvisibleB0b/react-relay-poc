/**
 * @generated SignedSource<<3c4fe7a6bd38df31a53b09cf0b21e4e4>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type RaceForSelectionFragment$fragmentType = any;
export type RaceSelectorQuery$variables = {|
  series: string,
  season?: ?string,
|};
export type RaceSelectorQueryVariables = RaceSelectorQuery$variables;
export type RaceSelectorQuery$data = {|
  +specificRace: $ReadOnlyArray<{|
    +$fragmentSpreads: RaceForSelectionFragment$fragmentType,
  |}>,
|};
export type RaceSelectorQueryResponse = RaceSelectorQuery$data;
export type RaceSelectorQuery = {|
  variables: RaceSelectorQueryVariables,
  response: RaceSelectorQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "season"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "series"
},
v2 = [
  {
    "kind": "Variable",
    "name": "season",
    "variableName": "season"
  },
  {
    "kind": "Variable",
    "name": "series",
    "variableName": "series"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RaceSelectorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Race",
        "kind": "LinkedField",
        "name": "specificRace",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RaceForSelectionFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "RaceSelectorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Race",
        "kind": "LinkedField",
        "name": "specificRace",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "raceName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "round",
            "storageKey": null
          },
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
    "cacheID": "c1a04cc756f0b1818f9cf9bd665ba49b",
    "id": null,
    "metadata": {},
    "name": "RaceSelectorQuery",
    "operationKind": "query",
    "text": "query RaceSelectorQuery(\n  $series: String!\n  $season: String\n) {\n  specificRace(series: $series, season: $season) {\n    ...RaceForSelectionFragment\n    id\n  }\n}\n\nfragment RaceForSelectionFragment on Race {\n  raceName\n  round\n}\n"
  }
};
})();

(node/*: any*/).hash = "d07caecf152838fa99cd44be391dc5b0";

module.exports = ((node/*: any*/)/*: Query<
  RaceSelectorQuery$variables,
  RaceSelectorQuery$data,
>*/);
