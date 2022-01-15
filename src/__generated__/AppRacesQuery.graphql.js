/**
 * @generated SignedSource<<4c7d34645df584d1c748efb403a1a921>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type DriversResultsFragment$fragmentType = any;
export type AppRacesQuery$variables = {||};
export type AppRacesQueryVariables = AppRacesQuery$variables;
export type AppRacesQuery$data = {|
  +races: $ReadOnlyArray<{|
    +series: string,
    +season: string,
    +round: string,
    +url: string,
    +raceName: string,
    +date: string,
    +results: $ReadOnlyArray<{|
      +$fragmentSpreads: DriversResultsFragment$fragmentType,
    |}>,
  |}>,
|};
export type AppRacesQueryResponse = AppRacesQuery$data;
export type AppRacesQuery = {|
  variables: AppRacesQueryVariables,
  response: AppRacesQuery$data,
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
    "name": "AppRacesQuery",
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
            "concreteType": "Result",
            "kind": "LinkedField",
            "name": "results",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DriversResultsFragment"
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRacesQuery",
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
            "concreteType": "Result",
            "kind": "LinkedField",
            "name": "results",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "number",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "position",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Driver",
                "kind": "LinkedField",
                "name": "driver",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "givenName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "familyName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "dateOfBirth",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nationality",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
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
    "cacheID": "518b8355e115e6d893e70aa04b6418bb",
    "id": null,
    "metadata": {},
    "name": "AppRacesQuery",
    "operationKind": "query",
    "text": "query AppRacesQuery {\n  races {\n    series\n    season\n    round\n    url\n    raceName\n    date\n    results {\n      ...DriversResultsFragment\n    }\n    id\n  }\n}\n\nfragment DriversResultsFragment on Result {\n  number\n  position\n  driver {\n    givenName\n    familyName\n    dateOfBirth\n    nationality\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "4c9cd53fd42324a9a43262c8e1e57524";

module.exports = ((node/*: any*/)/*: Query<
  AppRacesQuery$variables,
  AppRacesQuery$data,
>*/);
