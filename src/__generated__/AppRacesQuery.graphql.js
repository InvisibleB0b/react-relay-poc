/**
 * @generated SignedSource<<b2888e82a6a73fc35a8c0baa75b53ef4>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type DriversResultsFragment$fragmentType = any;
export type AppRacesQuery$variables = {|
  series: string,
  season?: ?string,
|};
export type AppRacesQueryVariables = AppRacesQuery$variables;
export type AppRacesQuery$data = {|
  +specificRace: $ReadOnlyArray<{|
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
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "series",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "season",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "round",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "raceName",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRacesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Race",
        "kind": "LinkedField",
        "name": "specificRace",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppRacesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Race",
        "kind": "LinkedField",
        "name": "specificRace",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
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
    "cacheID": "bf49e28e1c3bb3cf3f1385e284be8ff8",
    "id": null,
    "metadata": {},
    "name": "AppRacesQuery",
    "operationKind": "query",
    "text": "query AppRacesQuery(\n  $series: String!\n  $season: String\n) {\n  specificRace(series: $series, season: $season) {\n    series\n    season\n    round\n    url\n    raceName\n    date\n    results {\n      ...DriversResultsFragment\n    }\n    id\n  }\n}\n\nfragment DriversResultsFragment on Result {\n  number\n  position\n  driver {\n    givenName\n    familyName\n    dateOfBirth\n    nationality\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "231ba81e514e0094ba8e91492d615795";

module.exports = ((node/*: any*/)/*: Query<
  AppRacesQuery$variables,
  AppRacesQuery$data,
>*/);
